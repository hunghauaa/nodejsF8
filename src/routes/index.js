const { Router } = require("express");
const siteRouter = require('./site');
const courseRouter = require('./courses');
const meRouter = require('./me')
// const searchRouter = require('./search')


function route(app){
    app.use('/course',courseRouter)
    // app.use('/news',newsRouter)
    app.use('/me',meRouter)
    // app.use('/search',searchRouter)
    app.use('/',siteRouter)



}

module.exports = route;
