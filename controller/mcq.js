const Mcq = require('../model/mcq');
const User = require('../model/user');

async function handleGetAllQuestions(req, res) {
    try {
        const questions = await Mcq.find({});
        res.status(200).send(questions);
        return;
    } catch (error) {
        console.log("Error fetching all questions: ", error);
        return;
    }
}

async function handleGetQuestion(req, res) {
    const {id} = req.body;
    try {
        if(!id) {
            const questions = await Mcq.aggregate([{$sample: {size: 1}}]);
            res.status(200).send(questions[0]);
            return;
        }
        const question = await Mcq.findById({_id: id});
        res.status(200).send(question);
        return;
    } catch (error) {
        res.status(500)
        console.log(`Error fetching question (id: ${id})`, error);
        return;
    }
}

async function handleCreateQuestion(req, res) {
    try {
        const {question, options, difficulty, tags} = req.body;
        if(!question) {
            res.status(400).send("Question can't be empty");
            return;
        }
        if(!options) {
            res.status(400).send("options can't be empty");
            return;
        }
        const mcq = await Mcq.create({
            question,
            options,
            difficulty,
            tags,
        });
        res.status(201).send('Successfully created question')
        console.log(`created question. Id = ${mcq._id}`);
        return;
    } catch (error) {
        res.status(500)
        console.log("Error creating question")
        return;
    }
}

async function handleUpdateQuestion(req, res) {
    const {id, question, options, difficulty, tags} = req.body;
    try {
        if(!id) {
            res.status(404).send("resource not found");
            console.log("request does not contain an id");
            return;
        }

        const update = {
            question,
            options,
            difficulty,
            tags,
        }
        const updatedMcq = await Mcq.findByIdAndUpdate(id, update, {
            new: true,
            usert: false,
        });
        res.status(201).send(updatedMcq);
        return;
    } catch (error) {
        res.status(404).send("resource not found");
        console.log("Update error: ",error);
        return;
    }
}

async function handleDeleteQuestion(req, res) {
    const {id} = req.body
    try {
        if(!id) {
            res.status(404).send("resource not found");
            console.log("request does not contain an id");
            return;
        }
        const deletedQuestion = await Mcq.findByIdAndDelete(id);
        console.log("deleted question: ", deletedQuestion);
        res.status(204).send();
        return;
    } catch (error) {
        res.status(404).send();
        console.log("delete error: ", error);
        return;
    }
}

module.exports = {
    handleGetAllQuestions,
    handleGetQuestion,
    handleCreateQuestion,
    handleUpdateQuestion,
    handleDeleteQuestion,
}