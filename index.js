const express = require('express');
const app = express();
const port = 3000;
const getTarantoolClient = require('./tarantoolClient');

// Assuming your Tarantool instance is running locally and listening on port 3302
const client = getTarantoolClient();

app.get('/', async (req, res) => {
    try {
        await client.insert('customers', [1, 'John Doe', '555-0100', { age: 30 }]);
        await client.insert('customers', [2, 'Valera', '555-0101', { age: 25 }]);
        const data = await client.select('customers');
        res.status.json({
            data
        });
    } catch (e) {
        console.log(e.message)
        res.status(500).send(e.message);
    }
});

client.on('connect', () => {
    console.log('Connected to Tarantool');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
