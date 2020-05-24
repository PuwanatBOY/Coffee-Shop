const expressFunction = require('express');
const expressApp = expressFunction();
const bodyParser = require("body-parser");
const cors = require("cors");

var corsOptions = {
    origin: "http://localhost:4200"
};

expressApp.use(cors(corsOptions));

// parse requests of content-type - application/json
expressApp.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
expressApp.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

require("./app/routes/register.routes")(expressApp);
expressApp.listen(3000, function() { console.log('Listening on port 3000'); });