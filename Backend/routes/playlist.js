/*
Api to create a playlist
API to get playlist by id
API to add remove playlist by id
*/

const express = require("express");
const passport = require("passport");

const router = express.Router();
const Playlist = require("../models/Playlist");
const User = require("../models/User");
const Song = require("../models/Song");

router.post(
  "/create/playlist",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currentUser = req.user;
    const ownerID = currentUser._id;
    const { name, thumbnail, songs } = req.body;
    if (!name || !songs || !thumbnail) {
      return res.status(301).json({ error: "Insufficient Credentials" });
    }

    const newPlaylist = await Playlist.create({
      name,
      thumbnail,
      owner: ownerID,
      songs,
      collaborators: ownerID,
    });

    return res.status(200).json({ newPlaylist });
  }
);

//API playList id as parameter
//New Concept (req.params) focus on {get/:playlistId} where playlistId is a variable and is assigned with any value with which this route is called for example get/:abcd  this means playlistId=abcd.No Matter what is after {get/:-------} this route is called stroing the aftercontent of : inside a variable. where else if their was no colon then this api would have been called only if , it had matched {get/playlistID} word by word.

router.get(
  "/get/playlist/:playlistId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { playlistId } = req.params;
    const playlist = await Playlist.findOne({ _id: playlistId }).populate({
      path: "songs",
      populate: {
        path: "artists"
      }
    });
    console.log("helloe" + playlist);
    if (!playlist) {
      return res.status(301).json({ error: "Not Id " });
    }
    return res.status(200).json(playlist);
  }
);
//get All playlist Made by me

router.get("/get/me",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const artistID = req.user._id;
    const playlist = await Playlist.find({ owner: artistID }).populate("owner");
    return res.status(200).json({ data: playlist })
  }
)
//get playlistsss made by artist

router.get(
  "/get/artist/:artistID",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { artistID } = req.params;
    const artist = await User.find({ _id: artistID });
    if (!artist) {
      return res.status(304).json({ error: "Invalid artist ID" });
    }

    //empty array will be reurned  1.artist does not exit  2. artist exits but doesnt have any playlist

    const playlists = await Playlist.find({ owner: artistID });
    return res.status(200).json({ data: playlists });
  }
);

//add a song to playlist
router.post(
  "/add/song",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { songId, playlistId } = req.body;
    const currentUser = req.user; //returned by midleware

    const playlist = await Playlist.findOne({ _id: playlistId });

    if (!playlist) {
      return res.status(404).json({ err: "Playlist not found" });
    }
    console.log(req.user);
    console.log(currentUser._id);
    console.log(playlist.owner);
    console.log(playlist.collaborators);
    //check if the current user owns the playlist or is he a collaborator
    if (
      !playlist.owner.equals(currentUser._id) &&
      !playlist.collaborators.includes(currentUser._id)
    ) {
      //ERROR : Not Able to test this
      //
      return res.status(400).json({ err: "Not Allowed" });
    }

    //check if the song is valid
    const song = await Song.findOne({ _id: songId });
    console.log(song);
    if (!song) {
      return res.status(404).json({ err: "Song doesn't exits" });
    }

    playlist.songs.push(songId);
    await playlist.save();

    return res.status(200).json(playlist);
  }
);

module.exports = router;
