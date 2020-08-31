const Course = require('../model/Course');
const mg = require('../../util/mongoose')

class MeController{
    listCourse(req,res,next){
        Course.find({})
            // .then(courses=>res.render('myCourse',{courses : mg.multipleMongooseToObject(courses)}))
            .then(courses => res.render('myCourse',{courses : mg.multipleMongooseToObject(courses)}))
            .catch(next)
    }
}

module.exports = new MeController;
