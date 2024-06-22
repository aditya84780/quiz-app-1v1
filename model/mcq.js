const mongoose = require('mongoose');
const {optionSchema} = require('./options')

const mcqSchema = new mongoose.Schema({
    id: {
        type: String,
        required: false,
    },
    question: {
        type: String,
        required: true,
    },
    options: {
        type: [optionSchema],
        required: true,
        validate: {
            validator: function(v){
                return v.length === 4;
            },
            message: (props) => {`This question has ${props.value.length} options instead of 4`},
        },
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        default: 'medium',
    },
    tags: {
        type: [String],
        default: [],
    }
}, { timestamps: true }
);

const Mcq = mongoose.model("mcq", mcqSchema);

module.exports = Mcq;