const express = require('express')
const router = express.Router()
const meController = require('../app/controllers/MeController')

router.get('/course',meController.listCourse)

module.exports= router;