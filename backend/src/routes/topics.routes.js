const express = require('express');
const router = express.Router();
const { createTopic, listTopics } = require('./../controllers/topics.controller');
const auth = require('./../middlewares/auth.middleware');


router.post('/:subjectId/topics', auth, createTopic);
router.get('/:subjectId/topics', auth, listTopics);

module.exports = router;
