export class ApiService {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async getValue() {
        const response = await fetch(`${this.baseURL}/counter`);
        return await response.json();
    }

    async increment() {
        const response = await fetch(`${this.baseURL}/counter/increment`, { method: "POST" });
        return await response.json();
    }

    async decrement() {
        const response = await fetch(`${this.baseURL}/counter/decrement`, { method: "POST" });
        return await response.json();
    }
}
