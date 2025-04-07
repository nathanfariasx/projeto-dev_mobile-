const express = require('express');
const router = express.Router();

const usersRoutes = require('./users.routes');      // Endpoint de cadastro de usuário
const subjectsRoutes = require('./subjects.routes'); // Endpoints de matéria
const topicsRoutes = require('./topics.routes');     // Endpoints de assunto
const hoursRoutes = require('./hours.routes');       // Endpoint de registro de horas


router.use('/', usersRoutes);
router.use('/subjects', subjectsRoutes);
router.use('/subjects', topicsRoutes);
router.use('/subjects', hoursRoutes);

module.exports = router;
