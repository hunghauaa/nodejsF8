const Course = require('../model/Course');
const User =require('../model/user')
const mg = require('../../util/mongoose');
const { render } = require('node-sass');
jwt = require('jsonwebtoken')

class Sitecontroller{
    home(req,res,next) {
        Course.find({})
          .then(courses => {
            // courses = courses.map(course=>course.toObject())
            res.render('home',{courses : mg.multipleMongooseToObject(courses) })
          })
          .catch(next)
      }
    //   
    search(req,res,next) {

          let key = {name:req.query.name}
          Course.findOne(key)
              .then(course=>{
                    res.render('home',{courses : [course.toObject()] })
              })
              .catch(next)
        }
    login(req,res,next){
      res.render('login',{layout: false})
    }
    // doLogin(req,res,next){
    //   let {email,password} = req.body
    //   User.findOne({email,password})
    //     .then((user)=>jwt.sign({user},'hunghauaa'))
    //     .then((token)=>res.json({token}))
    // }

    doLogin(req,res,next){
      let {email,password} = req.body
      jwt.sign({user:'hung'},'hunghauaa',(error,tooken)=>{
        (!error)&&res.json(tooken)
      })
    }

    signup(req,res){
      res.render('signup',{layout:false})
    }
    createUser(req,res,next){
      const alert =()=> confirm("Press a button!");
      let{email,password,phoneNumber} = req.body
      User.init()
        .then(()=>User.create({email,password,phoneNumber}))
        .then(()=> res.redirect('/login'))
        // .catch(next)
        // .catch(()=>res.send('<div>Email đã tồn tại, hãy dùng email khác để đăng ký tại <a href="/signup" style="color:blue">đây</a></div>'))
        .catch((err) =>res.render('signup',{layout: false,err}))
    }

    
}

module.exports = new Sitecontroller;
