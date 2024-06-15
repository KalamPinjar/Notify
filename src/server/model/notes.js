import mongoose from "mongoose";

const MONGOOSE_URL = "mongodb://localhost:27017/notes";

mongoose
  .connect(MONGOOSE_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));

const notesSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const notesModel = mongoose.model("Notes", notesSchema);



export default notesModel;
