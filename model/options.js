const mongoose = require('mongoose')

const optionSchema = new mongoose.Schema({
    optionText: {
        type: String,
        required: true,
    },
    isCorrect: {
        type: boolean,
        required: true,
    },
});

const Option = mongoose.model("option", optionSchema);

module.exports = {
    Option,
    optionSchema,
};