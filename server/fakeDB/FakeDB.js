
const { movies, users, images } = require('./data');
const Movie = require('../models/movies');
const User = require('../models/users');
const CloudinaryImage = require('../models/cloudinary-image');

class FakeDB {
  async clean() {
    await CloudinaryImage.deleteMany({});
    await Movie.deleteMany({});
    await User.deleteMany({});
      }

  async addData() {
    await CloudinaryImage.create(images);
    await Movie.create(movies);
    await User.create(users);
  }

  async populate() {
    await this.clean();
    await this.addData();
  } 
}

module.exports = FakeDB;