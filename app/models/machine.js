const mongoose = require('mongoose')

const MachineSchema = mongoose.Schema({
    name: String,
    category: String,
    hp: Number,
    challenge_level: Number
}, {
    timestamps: true
})

module.exports = mongoose.model('Machine', MachineSchema)