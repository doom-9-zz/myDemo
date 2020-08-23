const mongoose = require('mongoose')

const Schema = mongoose.Schema

const rules = new Schema({
    stu_id: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('students',rules)