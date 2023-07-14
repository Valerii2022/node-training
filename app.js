import express from "express";
import contacts from "./db/contacts.js";
import fs from "fs/promises";
import path from "path";
import moment from "moment/moment.js";

const app = express();
const contactsPath = path.resolve("data.txt");

app.use((req, res, next) => {
  fs.appendFile(
    contactsPath,
    `${req.method} ${req.url} ${moment().format("MMMM Do YYYY, h:mm:ss a")} \n`
  );
  next();
});

app.get("/", (req, res) => {
  res.json([]);
});

app.get("/contacts", (req, res) => {
  res.json(contacts);
});

app.get("/products", (req, res) => {
  res.json("Empty page(((");
});

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(3000, () => console.log("server running on 3000 port"));
