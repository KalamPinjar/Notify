import express from "express";
import mongodb from "mongodb";
import cors from "cors";
import NotesModel from "./model/notes.js";

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const ObjectID = mongodb.ObjectId;
app
  .route("/api")
  .get(async (req, res) => {
    const data = await NotesModel.find({});
    res.json(data);
  })
  .post((req, res) => {
    const note = new NotesModel(req.body);
    note
      .save()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });
app.route("/api/:id").delete(async (req, res) => {
  const data = await NotesModel.deleteOne({ _id: new ObjectID(req.params.id) });
  res.json(data);
});

//   .patch((req, res) => {
//     res.json({})
//   })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
