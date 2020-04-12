import { observable, action } from 'mobx';
import { ProductModel } from '../models/Product';
import firebaseAdapter from '../services/firebase.adapter';

export type Product = {
    label: string;
    done: boolean;
    tags: Record<number, string>
}

export class ProductsStore {
    constructor(products?: ProductModel[]) {
        this.data = products || [];
    }

    @observable public data: ProductModel[];

    @action
    toggleDone = (id: string): void => {
        this.data = this.data.map((product) => {
            if (product.id === id) {
                product.done = !product.done;
            }
            return product;
        });
    };

    @action
    sync = async (): Promise<void> => {
        const dataRef = firebaseAdapter.database().ref("products");

        dataRef.on('value', snapshot => {
            console.log('snapshot: ', snapshot.toJSON());
            const products = (snapshot.toJSON() || {} as Record<string, Product>);
            this.data = Object.entries(products).map(([id, { label, done }]) => new ProductModel({ id, name: label, done }))
        })

    }
}