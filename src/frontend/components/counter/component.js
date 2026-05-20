import config from '../../config.js';
import { ApiService } from '../../api-service.js';
import { CounterModel } from './model.js';
import { CounterView } from './view.js';
import { CounterController } from './controller.js';

export class CounterComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.apiService = new ApiService(config.API_URL);
        this.model = new CounterModel(this.apiService);
        this.view = new CounterView(this.model);
        this.controller = new CounterController(this.model, this.view);
    }

    connectedCallback() {
        this.view.shadowRoot = this.shadowRoot;
        this.model.initialize();
    }
}

customElements.define('my-counter', CounterComponent);
