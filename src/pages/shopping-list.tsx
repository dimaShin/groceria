import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { STORES, WithProductsStore } from '../stores';
import { ShoppingList } from '../components/shopping-list';

export type ShoppingListPageComponentProps = WithProductsStore;

const ShoppingListPageComponent: React.FunctionComponent<ShoppingListPageComponentProps> = ({ productsStore }) => {
    React.useEffect(() => {
        productsStore.sync();
    }, []);

    return (
        <ShoppingList data={productsStore.data} toggleDone={productsStore.toggleDone} update={productsStore.updateName} />
    );
}

// @ts-ignore
export const ShoppingListPage = inject(STORES.PRODUCTS)<WithProductsStore>(observer(ShoppingListPageComponent)) as React.FunctionComponent;