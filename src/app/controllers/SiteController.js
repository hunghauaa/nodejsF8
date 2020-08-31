const Cource = require('../model/Course');
const mg = require('../../util/mongoose')

class Sitecontroller{
    home(req,res,next) {
        Cource.find({})
          .then(cources => {
            // cources = cources.map(cource=>cource.toObject())
            res.render('home',{cources : mg.multipleMongooseToObject(cources) })
          })
          .catch(next)
      }
    //   
    search(req,res,next) {

          let key = {name:req.query.name}
          Cource.findOne(key)
              .then(course=>{
                    res.render('home',{cources : [course.toObject()] })
              })
              .catch(next)
        }
    
}

module.exports = new Sitecontroller;
