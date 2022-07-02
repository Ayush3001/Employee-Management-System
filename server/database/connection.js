//process.env.MONGO_URI
const mongoose = require("mongoose");
const connect = async () => {
    try {
        // mongodb connection
        const con = await mongoose.connect('mongodb://localhost:27017/', {
           useNewUrlParser : true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
           
        });
        console.log(`MongoDB connected : ${con.connection.host}`);
        
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connect;
