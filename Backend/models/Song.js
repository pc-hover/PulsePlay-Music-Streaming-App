const mongoose = require("mongoose");

/*
1. create connection
2. create schema 
3. craete model
4, use that module
*/

const songSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String, //url
        required: true,
    },
    track: {
        type: String,
        required: true,
    },
    //we will store artist as User.js model
    artist: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    }

});

const songModel = mongoose.model("Song", songSchema);

module.exports = songModel;