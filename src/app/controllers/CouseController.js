const Course = require("../model/Course");
const mg = require('../../util/mongoose')


class CourseController{
    index(req,res,next) {
        var slug = req.params.slug
        Course.findOne({ slug })
            .then( courses =>{
                res.render('readCourse',{courses : mg.mongooseToObject(courses)})
            })
            .catch(next)
     }
     getCreateCourse(req,res,next){
         res.render('createCourse')
     }
     createDoc(req,res,next){
        //  let name = req.bodyParser.name
        //  res.json({name})
        let {name, image, description,videoId} = req.body;
        Course.create(
            {name,
            image:`https://img.youtube.com/vi/${req.body.image}/sddefault.jpg` ,
            description,
            videoId,
        })
            .then(course => res.redirect('/'))

            .catch(err=> res.json({  
                'loi':err
            }))
     }
     edit(req,res,next){
         Course.findById(req.params.slug)
            .then(course => res.render('editCourse',{course : mg.mongooseToObject(course)}))
            .catch(next)
     }
     update(req,res,next){
        let {name, image, description,videoId} = req.body;
         Course.findByIdAndUpdate(req.params.slug,{
            name,
            image,
            description,
            videoId,
         })
            .then(()=>res.redirect('/me/course'))
            .catch(next)

     }
     delete(req,res,next){
        Course.deleteOne({_id : req.params.slug})
           .then(()=>res.redirect('back'))
           .catch(next)
    }

}

module.exports = new CourseController;
