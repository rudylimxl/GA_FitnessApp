import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import passport from "passport";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

const uri = process.env.URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});
