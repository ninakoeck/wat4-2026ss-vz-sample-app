import './components/counter/component.js';

class AppComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        const counter = document.createElement("my-counter")
        this.shadowRoot.append(counter);
    }
}

customElements.define("my-app", AppComponent);
