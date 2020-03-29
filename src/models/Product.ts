import { observable, action } from 'mobx';

export class ProductModel {
    readonly id: number;
    @observable public name: string;
    @observable public done: boolean;

    constructor(name: string, done: boolean = false) {
        this.id = ProductModel.generateId();
        this.name = name;
        this.done = done;
    }

    @action
    toggle() {
        this.done = !this.done;
    }

    static nextId = 1;
    static generateId() {
        return this.nextId++;
    }
}