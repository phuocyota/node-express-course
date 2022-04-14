// các bước làm model
// b1: gọi thư viện mongoose
const mongoose = require('mongoose')
// b2: ánh xạ schema
const user = new mongoose.Schema({
    username: {
        type: String,
        default: 'usernameDemo'
    },
    password: {
        type: String,
        default: 'passwordDemo'
    },
    fullname: {
        type: String,
        default: 'fullnameDemo'
    },
    address: {
        type: String,
        default: 'addressDemo'
    },
    phone: {
        type: String,
        default: 'phoneDemo'
    }
})
// b3: xuất model
module.exports = mongoose.model('user', user)
