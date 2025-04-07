
const express = require('express');
const router = express.Router();
const { recordHours } = require('./../controllers/hours.controller');
const auth = require('./../middlewares/auth.middleware');

// Endpoint para registrar horas para um assunto
router.post('/:subjectId/topics/:topicId/hours', auth, recordHours);

module.exports = router;
