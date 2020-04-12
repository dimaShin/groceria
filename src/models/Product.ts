import { observable, action } from 'mobx';

export class ProductModel {
    readonly id: string;
    @observable public name: string;
    @observable public done: boolean;

    constructor({ name, done = false, id }: Partial<ProductModel>) {
        this.id = id || ProductModel.generateId();
        this.name = name || '';
        this.done = done;
    }

    @action
    toggle() {
        this.done = !this.done;
    }

    static nextId = 1;
    static generateId() {
        return `${+this.nextId++}`;
    }
}