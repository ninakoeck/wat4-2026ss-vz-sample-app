class CounterService {
    constructor() {
        this.counterValue = 0;
    }

    getValue() {
        return this.counterValue;
    }

    increment() {
        this.counterValue++;
        return this.counterValue;
    }

    decrement() {
        this.counterValue--;
        return this.counterValue;
    }

    update(value) {
        if (typeof value !== 'number') {
            throw new Error('Value must be a number');
        }
        this.counterValue = value;
        return this.counterValue;
    }
}

export default new CounterService();
