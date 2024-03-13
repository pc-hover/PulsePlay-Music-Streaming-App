const mongoose = require("mongoose");

/*
1. create connection
2. create schema 
3. create model
4, use that module
*/
const PlaylistSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String, //url
        required: true,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    songs: [{
        //array
        type: mongoose.Types.ObjectId,
        ref: "Song",
    }],
    collaborators: [
        {
            type: mongoose.Types.ObjectId,
            ref: "User"
        }
    ]

});

const PlaylistModel = mongoose.model("Playlist", PlaylistSchema);

module.exports = PlaylistModel;