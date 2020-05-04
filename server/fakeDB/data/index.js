const mongoose = require('mongoose');

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();

const image1Id = mongoose.Types.ObjectId();
const image2Id = mongoose.Types.ObjectId();
const image3Id = mongoose.Types.ObjectId();
const image4Id = mongoose.Types.ObjectId();
exports.images = [
    {
        _id: image1Id,
        cloudinaryId: 'image1_eyvyrh',
        url: 'https://res.cloudinary.com/mark93/image/upload/v1588490648/The_Avengers_eyvyrh.jpg'
    },
    {
        _id: image2Id,
        cloudinaryId: 'image2_kbsleh',
        url: 'https://res.cloudinary.com/mark93/image/upload/v1588490648/Age_OF_Ultron_kbsleh.jpg'
    },
    {
        _id: image3Id,
        cloudinaryId: 'image3_i5sxya',
        url: 'https://res.cloudinary.com/mark93/image/upload/v1588490648/Avengers_Infinity_War_i5sxya.jpg'
    },
    {
        _id: image4Id,
        cloudinaryId: 'image4_lbpf7u',
        url: 'https://res.cloudinary.com/mark93/image/upload/v1588491216/Money_Heist_lbpf7u.jpg'
    }
]

exports.users = [{
    _id: user1Id,
    username: "admin",
    email: "admin@gmail.com",
    password: "admin123"
}, {
    _id: user2Id,
    username: "Test User2",
    email: "test2@gmail.com",
    password: "testtest2"
}]

exports.movies = [
    {
        title: "Avengers",
        category: "Movie",
        image: image1Id,
        description: "First part of the avenges series.",
        owner: user1Id
    },
    {
        title: "Avengers - Age Of Ultron ",
        category: "Movie",
        image: image1Id,
        description: "Third part of the avenges series.",
        owner: user1Id
    },

    {
        title: "Avengers - Infinity War ",
        category: "Movie",
        image: image1Id,
        description: "Forth part of the avenges series.",
        owner: user1Id
    },

    {
        title: "Money Heist ",
        category: "Series",
        image: image1Id,
        description: "Forth part of the avenges series.",
        owner: user1Id
    },

]