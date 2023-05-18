const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/payload_inventory_api_dev');
}

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to the database'));


db.on('open', () => {
    console.log('Connected to mongo db client sucessfully');
});
