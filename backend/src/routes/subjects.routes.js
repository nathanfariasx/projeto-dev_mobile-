const express = require('express');
const router = express.Router();
const { createSubject, listSubjects } = require('./../controllers/subjects.controller');
const auth = require('./../middlewares/auth.middleware');


router.post('/', auth, createSubject);
router.get('/', auth, listSubjects);

module.exports = router;
