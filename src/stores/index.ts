import { History } from 'history';
import { RouterStore } from './router-store';
import { ProductsStore } from './products-store';

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
    const productsStore = new ProductsStore()
    return {
        [STORES.ROUTER]: routerStore,
        [STORES.PRODUCTS]: productsStore,
    };
}