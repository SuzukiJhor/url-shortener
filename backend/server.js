import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { nanoid } from "nanoid";

const app = express();
app.use(cors());
app.use(express.json());

// Conexão Mongo
mongoose.connect("mongodb://127.0.0.1:27017/urlshortener");

const Url = mongoose.model("Url", new mongoose.Schema({
  shortId: { type: String, unique: true },
  originalUrl: String,
}));

// Criar URL curta
app.post("/shorten", async (req, res) => {
  const { url } = req.body;
  const shortId = nanoid(6);
  await Url.create({ shortId, originalUrl: url });
  res.json({ shortUrl: `http://localhost:3000/${shortId}` });
});

// Redirecionar
app.get("/:shortId", async (req, res) => {
  const entry = await Url.findOne({ shortId: req.params.shortId });
  if (entry) {
    res.redirect(entry.originalUrl);
  } else {
    res.status(404).send("URL não encontrada");
  }
});

app.listen(3000, () => console.log("API rodando em http://localhost:3000"));
