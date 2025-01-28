const net = require('net');

function portScan(target, rateLimit, logOutput) {
    const ports = [21, 22, 23, 25, 53, 80, 110, 135, 139, 143, 443, 445, 993, 995, 1723, 3306, 3389, 5900, 8080];

    setInterval(() => {
        ports.forEach(port => {
            const client = new net.Socket();
            client.connect(port, target, () => {
                logOutput(`Port ${port} is open`);
                client.destroy();
            });

            client.on('error', (err) => {
                logOutput(`Port ${port} is closed`);
            });
        });
    }, 1000 / rateLimit);
}

module.exports = portScan;
