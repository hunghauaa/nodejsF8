const express = require('express')
const router = express.Router()
const courseController = require('../app/controllers/CouseController')

router.get('/create',courseController.getCreateCourse)
router.post('/create',courseController.createDoc)
router.get('/:slug/edit',courseController.edit)
router.post('/:slug/edit',courseController.update)
router.post('/:slug/delete',courseController.delete)
router.get('/:slug',courseController.index)

module.exports= router;
