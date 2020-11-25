import express from "express";
import mongoose from "mongoose";

import data from "./data.js";
import videos from "./dbModel.js";

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next();
});

const connection_url =
  "mongodb+srv://tiktok:tiktok@cluster0.uvdyq.mongodb.net/tiktokdb?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => res.status(200).send("app working.."));

app.get("/v1/posts", (req, res) => res.status(200).send(data));

app.get("/v2/posts", (req, res) => {
  videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/v2/posts", (req, res) => {
  const dbVideos = req.body;
  videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.listen(port, () => console.log(`app working on port ${port}`));
