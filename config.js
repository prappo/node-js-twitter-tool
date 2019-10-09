function getData() {
    var fs = require('fs');
    var obj = JSON.parse(fs.readFileSync('config.json', 'utf8'));
    return obj;
}

module.exports = {
    consumer_key: getData().consumer_key,
    consumer_secret: getData().consumer_secret,
    access_token_key: getData().access_token_key,
    access_token_secret: getData().access_token_secret,
    api_key: getData().api_key,
    domain: getData().domain,
};