const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String, required: true, maxlength: [128, 'Invalid length! Maximum is 128 characters']},
  category: { type: String, required: true, lowercase: true },
  description: { type: String, required: true },
  image: { type: Schema.Types.ObjectId, ref: 'CloudinaryImage' },
  owner: { type: Schema.Types.ObjectId, ref: 'User'},
  createdAt: { type: Date, default: Date.now }
})

movieSchema.statics.sendError = function(res, config) {
  const { status, detail } = config;
  return res
    .status(status)
    .send({errors: [{title: 'Movie Error!', detail}]})
}




module.exports = mongoose.model('Movie', movieSchema);