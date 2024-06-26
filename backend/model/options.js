const mongoose = require('mongoose')

const optionSchema = new mongoose.Schema({
    optionText: {
        type: String,
        required: true,
    },
    isCorrect: {
        type: Boolean,
        required: true,
    },
});

const Option = mongoose.model("Option", optionSchema);

module.exports = {
    Option,
    optionSchema,
};