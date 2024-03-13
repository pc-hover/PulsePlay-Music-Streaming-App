const mongoose = require("mongoose");

/*
1. create schema
2. craete model
3. use that module
4, 
*/


const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        private: true
    },
    likedSong: [{
        type: String,
        default: "",
    }],
    likedPlaylist: [{
        type: String,
        default: "",
    }],
    subscribedArtists: [{
        type: String,
        default: ""
    }]
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;

