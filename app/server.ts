import express from 'express';
import mongoose from 'mongoose';
import MongoMemoryServer from 'mongodb-memory-server';
import bodyParser from 'body-parser';

const mongod = new MongoMemoryServer();
mongoose.Promise = Promise;
mongod.getConnectionString().then((mongoUri) => {
    const mongooseOpts = {
        autoReconnect: true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 1000,
        useNewUrlParser: true,
    };

    mongoose.connect(mongoUri, mongooseOpts);

    mongoose.connection.on('error', (e) => {
        if (e.message.code === 'ETIMEDOUT') {
            console.log(e);
            mongoose.connect(mongoUri, mongooseOpts);
        }
        console.log(e);
    });

    mongoose.connection.once('open', () => {
        console.log(`MongoDB successfully connected to ${mongoUri}`);
    });
});

import { UsersController } from './controllers/api/UsersController';

const app: express.Application = express();
const port: number = 4004;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users', UsersController);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});
