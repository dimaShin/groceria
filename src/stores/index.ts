import { History } from 'history';
import { RouterStore } from './router-store';
import { ProductsStore } from './products-store';
import { ProductModel } from '../models/Product';

export const STORES = {
    ROUTER: 'routerStore',
    PRODUCTS: 'productsStore',
}

export type WithProductsStore = {
    productsStore: ProductsStore;
}

export type WithRouterStore = {
    routerStore: RouterStore;
}

export function createStores(history: History) {
    const routerStore = new RouterStore(history);
    const productsStore = new ProductsStore([
        new ProductModel('Milk'),
        new ProductModel('Eggs'),
        new ProductModel('Car'),
        new ProductModel('Appartments'),
    ])
    return {
        [STORES.ROUTER]: routerStore,
        [STORES.PRODUCTS]: productsStore,
    };
}