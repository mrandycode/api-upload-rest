const express = require('express');
const cors = require('cors');
const { config } = require('./config/config');
const routerApi = require('./routes');
const app = express();
const port = config.port || 3000;
const whitelist = [config.corsWhiteList];
const path = require('path');


app.use(express.json());

const options = {
    origin: (origin, callback) => {
        if (whitelist.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Host no permitido'));
        }
    }
}

app.use(cors(options));


app.get('/', (req, res) => {
    res.send('Welcome to api-upload-rest-1.0');
});



routerApi(app);

// app.use(logErrors);
// app.use(ormErrorHandler);
// app.use(boomErrorHandler);
// app.use(errorHandler);

app.listen(port);

