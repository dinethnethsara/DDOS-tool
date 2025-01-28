const request = require('request');

function robloxChatFlood(target, rateLimit, logOutput) {
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
                logOutput('Error: ' + error.message);
            } else {
                logOutput('Sent Roblox chat message');
            }
        });
    }, 1000 / rateLimit);
}

module.exports = robloxChatFlood;
