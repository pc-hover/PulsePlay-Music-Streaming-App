const cors = require("cors");

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const passport = require("passport");
const User = require("./models/User.js");

const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

//Importing Routes 
const authRoutes = require("./routes/auth.js");
const songRoutes = require("./routes/song.js");
const playlistRoutes = require("./routes/playlist.js");

const port = 3001;
const app = express();

app.use(express.json());
app.use(cors());

//which db to connect to  +  connection options
mongoose
  .connect(
    "mongodb+srv://priyanshu:" +
    process.env.MONGODB_PASSWORD +
    "@cluster0.evqkhta.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((x) => {
    console.log("Connected to Mongo!");
  })
  .catch((err) => {
    console.log("Connection Failed!!" + err);
  });

//setting up jwt token
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;
passport.use(
  new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ _id: jwt_payload.identifier }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        console.log(opts);
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    });
  })
);

app.get("/", (req, res) => {
  return res.send("Hello Priyanshu");
});

app.use("/auth", authRoutes);
app.use("/song", songRoutes);
app.use("/playlist", playlistRoutes);

app.listen(port, console.log(`Server running at port : ${port}`));
