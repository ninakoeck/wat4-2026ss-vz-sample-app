export class CounterController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.onIncrement = this.increment.bind(this);
        this.view.onDecrement = this.decrement.bind(this);
    }

    async increment() {
        await this.model.increment();
    }

    async decrement() {
        await this.model.decrement();
    }
}
