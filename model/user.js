const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
mongoose.connect(`${process.env.MONGO_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let userSchema = mongoose.Schema({
    email: String,
    password: String,
    
});

module.exports = mongoose.model('user', userSchema);
