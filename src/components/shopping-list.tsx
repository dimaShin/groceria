import * as React from 'react';
import { ProductModel } from '../models/Product';

export type ShoppingListProps = {
    data: ProductModel[],
    toggleDone: (id: string) => void;
}

export const ShoppingList: React.FunctionComponent<ShoppingListProps> = ({ data, toggleDone }) => (
    <>
        {data.map(product => <ProductComponent product={product} key={product.id} toggleDone={toggleDone} />)}
    </>
);

function ProductComponent({ product, toggleDone }: { product: ProductModel, toggleDone: ShoppingListProps["toggleDone"] }) {
    const style = product.done ? {
        textDecoration: 'line-through',
    } : {};

    return (
        <div onClick={() => toggleDone(product.id)}>
            <h2 style={style}>{product.name}</h2>
        </div>
    )
}