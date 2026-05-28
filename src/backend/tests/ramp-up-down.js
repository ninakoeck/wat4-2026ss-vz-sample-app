import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        { duration: '20s', target: 10},
        { duration: '20s', target: 10},
        { duration: '1m', target: 50},
        { duration: '30s', target: 10}
    ]
};

// test, der ausgeführt wird
export default function() {
    const res = http.get('http://localhost:5000/counter');
    check(res, { 'status was 200': (r) => r.status === 200 });
    sleep(1); // synchroner test (legt alles still)
};

// $env:K6_WEB_DASHBOARD='true' 
// $env:K6_WEB_DASHBOARD_PERIOD='1s'
// $env:K6_WEB_DASHBOARD_OPEN='true'
// k6 run 