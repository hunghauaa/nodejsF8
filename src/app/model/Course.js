const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug)

const Course = new Schema({
  name: {type : String, default:'' },
  description: {type : String, maxlength:600 },
  image: {type : String, maxlength:255 },
  videoId: {type : String, maxlength:255 },
  slug: { type: String, slug: "name", unique: true }
  // slug: {type:String, slug:'name'},
  
},{
  timestamps: true,
});
// Course.plugin(mongooseSlugPlugin);

module.exports = mongoose.model('Course', Course);