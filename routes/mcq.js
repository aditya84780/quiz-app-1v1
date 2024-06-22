const express = require('express')
const mcqHandler = require('../controller/mcq')

const router = new express.Router();

router.get('/all', mcqHandler.handleGetAllQuestions);
router.get('/', mcqHandler.handleGetQuestion)
      .post('/', mcqHandler.handleCreateQuestion)
      .put('/', mcqHandler.handleUpdateQuestion)
      .delete('/', mcqHandler.handleDeleteQuestion)

module.exports = router;