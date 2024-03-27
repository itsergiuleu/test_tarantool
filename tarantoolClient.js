const TarantoolDriver = require('tarantool-driver');

let client;

function getTarantoolClient() {
    if (!client) {
        client = new TarantoolDriver({
            host: 'test_tarantool-tarantool-1',
            port: 3301
        });
    }

    return client;
}

module.exports = getTarantoolClient;
