//contains all song related routes

// 1. We sill use token to auth user to perform all these routes using middleware
const express = require("express");
const router = express.Router();
const passport = require("passport");
const Song = require("../models/Song");
const User = require("../models/User");

//New Concept Using MiddleWare{to auth using token} which will be stored in req return user details . if error while token automatically handles  and returns error

//passport.authenticate("jwt",{session:false}
//("strategyName",{sesssion:true/false})
router.post(
  "/addLiked",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { songId } = req.body;

      const currentUser = req.user;
      currentUser.likedSong.push(songId);
      await currentUser.save();

      return res.status(200).json({ message: "Song added to liked songs successfully", currentUser });

    } catch (error) {
      console.error("Error adding liked song:", error);
      return res.status(500).json({ message: "Internal server error", error: error.message });
    }
  }
);
// router.get(
//   "/get/likedSongs",
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     const currentUser = req.user;

//     console.log(req.user);

//     const songs = await Song.find({ artist: currentUser._id }).populate("artist");
//     return res.status(200).json({ data: songs });
//   }
// );
router.get(
  "/get/likedSongs",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const currentUser = req.user;

      // Assuming likedSong is an array of song IDs in the user schema
      const likedSongIds = currentUser.likedSong;

      // Assuming Song model is imported correctly
      const likedSongs = await Song.find({ _id: { $in: likedSongIds } }).populate("artist");

      return res.status(200).json({ data: likedSongs });
    } catch (error) {
      console.error("Error fetching liked songs:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
);


router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { name, thumbnail, track } = req.body;
    const artist = req.user._id;
    if (!name || !thumbnail || !track) {
      return res.status(301).json({ error: "insufficients Credentials" });
    }
    const songDetails = { name, thumbnail, track, artist };

    const createdSong = await Song.create(songDetails);
    return res.status(200).json({ createdSong });
  }
);

//API to get all songs published by me
router.get(
  "/get/mysongs",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const currentUser = req.user;

    console.log(req.user);

    const songs = await Song.find({ artist: currentUser._id }).populate("artist");
    return res.status(200).json({ data: songs });
  }
);

//Create api to
// 1. get songs by artist
// 2. get song by name

//artist id --> get all songs
router.get(
  "/get/artist/:artistId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    //const artistId = req.body.artist;
    const { artistId } = req.params;

    const artist = await User.findOne({ _id: artistId });
    if (!artist) {
      return res.status(301).json({ err: "Artist does not exits" });
    }
    const songs = await Song.find({ artist: artistId });
    return res.status(200).json({ data: songs });
  }
);

router.get(
  "/get/songname/:songName",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { songName } = req.params;

    const songs = await Song.find({ name: songName }).populate("artist");
    return res.status(200).json({ data: songs });
  }
);

//Pattern matching while searching instead of direct name matching

module.exports = router;
