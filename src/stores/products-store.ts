import { observable, action } from 'mobx';
import { ProductModel } from '../models/Product';

export class ProductsStore {
    constructor(products: ProductModel[]) {
        this.data = products;
    }

    @observable public data: ProductModel[];

    @action
    toggleDone = (id: number): void => {
        this.data = this.data.map((product) => {
            if (product.id === id) {
                product.done = !product.done;
            }
            return product;
        });
    };
}