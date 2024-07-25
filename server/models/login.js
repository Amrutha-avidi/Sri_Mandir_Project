const mongoose = require("mongoose")

const Login = mongoose.Schema({
    phoneNumber: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^\d{10}$/.test(v); // Validate that the phone number is exactly 10 digits
            },
            message: props => `${props.value} is not a valid 10-digit phone number!`
        }
    }


})
    ;
const LoginModel = mongoose.model('login', Login)
module.exports = LoginModel