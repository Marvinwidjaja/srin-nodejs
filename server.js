import express from "express";
import mongoose from "mongoose";
import Books from "./models/Books";

const app = express();
const port = process.env.PORT || 5000;
const url = "mongodb://127.0.0.1:27017";

//Routers
import bookRouter from "./routes/books";

mongoose.connect(
  "mongodb+srv://kiboshi:kiboshi@cluster0.fcjwcrg.mongodb.net/srin",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

var db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error"));
db.once("open", function (callback) {
  console.log("connection succeeded");
});

app.get("/", async (req, res) => {
  const result = await Books.find({});
  return res.end(JSON.stringify(result, null, 3));
});

app.use(express.json());
app.use("/books", bookRouter);

app.listen(port, () => {
  console.log("listening on port " + port);
  console.log("http://localhost:" + port + "/");
});
