const express = require('express')
const router = express.Router()
const siteController = require('../app/controllers/SiteController')
const { route } = require('./courses')
const authToken = require('../middleware/authorization')

router.get('/',siteController.home)
router.get('/login',siteController.login)
router.post('/login',siteController.doLogin)
router.get('/signup',siteController.signup)
router.post('/signup',siteController.createUser)
router.get('/search',siteController.search)

module.exports= router;