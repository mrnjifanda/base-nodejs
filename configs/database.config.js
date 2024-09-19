const { mongoose } = require("./app.config");

const connect = (database) => {

    mongoose.connect(database, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {

        console.log("Successfully connected to database");
    }).catch((error) => {

        console.log("database connection failed. exiting now...");
        console.error(error);
        process.exit(1);
    });
}

module.exports = { connect };
