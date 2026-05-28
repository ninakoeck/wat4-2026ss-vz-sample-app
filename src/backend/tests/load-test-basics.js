import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 1,
    iterations: 10
};

// test, der ausgeführt wird
export default function() {
    let res = http.get('http://localhost:5000/counter');
    check(res, { 'status was 200': (r) => r.status === 200 });
    sleep(1); // synchroner test (legt alles still)
};

//  k6 run --vus 100 --duration 30s .\load-test-basics.js