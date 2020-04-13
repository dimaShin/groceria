import * as React from 'react';
import { ProductModel } from '../models/Product';
import { FlexBlock, FlexChild } from '../layout';
import styled from 'styled-components';
import { Input } from './input';

export type ShoppingListProps = {
    data: ProductModel[],
    toggleDone: (id: string) => void;
    update: (id: string, name: string) => void;
}

export type NewItemProps = {
    onSubmited: (label: string) => void;
}

export const ShoppingList: React.FunctionComponent<ShoppingListProps> = ({ data, toggleDone, update }) => {
    return (
        <>
            {data.map(product => <ProductComponent product={product} key={product.id} toggleDone={toggleDone} onChange={update} />)}
        </>
    );
}

const ProductRow = styled(FlexChild)`
    line-height: 50px;
`;

function ProductComponent({ product, toggleDone }: { product: ProductModel, toggleDone: ShoppingListProps["toggleDone"], onChange: ShoppingListProps["update"] }) {

    const [touchPosition, setTouchPosition] = React.useState<number | null>(null);
    const [touchMove, setTouchMove] = React.useState<number | null>(null);
    const [editMode, setEditMode] = React.useState(false);

    const touchHandler = React.useCallback((ev: React.TouchEvent) => {
        setTouchPosition(ev.touches[0].clientX);
    }, []);

    const moveHandler = React.useCallback((ev: React.TouchEvent) => {
        const currentPosition = ev.changedTouches[0].clientX;
        setTouchMove(currentPosition - (touchPosition || 0));
    }, [touchPosition]);

    const touchEndHandler = React.useCallback(() => {
        if (touchMove && touchMove < 50) {
            setEditMode(true);
        }
        setTouchPosition(null);
        setTouchMove(null);
    }, [touchMove]);

    const clickHandler = React.useCallback(() => toggleDone(product.id), [product.id])
    return (
        <>
            <FlexBlock
                flexDirection="row"
                style={{ marginLeft: touchMove ? `${touchMove}px` : '0px' }}
                onClick={clickHandler}
                onTouchStart={touchHandler}
                onTouchMove={moveHandler}
                onTouchEnd={touchEndHandler}
            >
                <ProductRow flex={1}><ProductName editMode={editMode} product={product} /></ProductRow>
                {(touchMove && touchMove < 20 || editMode) && <Controls />}
            </FlexBlock>
        </>
    )
}

const ActionButton = styled.button<{ bg: string }>`
    padding: 15px;
    background: ${props => props.bg || 'white'};
    font-weight: bold;
    border: 0;
    color: #fff;
`

function Controls({ onSubmit, onRemove }: Record<string, React.EventHandler<React.MouseEvent<HTMLButtonElement>>>) {
    return (
        <div>
            <ActionButton type="button" bg="green" onClick={onSubmit}>S</ActionButton>
            <ActionButton type="button" bg="red" onClick={onRemove}>X</ActionButton>
        </div>
    );
}

function ProductName({ editMode, product }: { editMode: boolean, product: ProductModel }) {
    const style = product.done ? {
        textDecoration: 'line-through',
    } : {};
    return editMode ? <Input value={product.name} onChange={() => { }} /> : <h2 style={style}>{product.name}</h2>;
}