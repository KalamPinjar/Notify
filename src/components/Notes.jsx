import Input from "./Input";
import Zoom from "@mui/material/Zoom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import { useState, useEffect } from "react";

// const notesList = [];

const Notes = () => {
  const [notes, setNotes] = useState({
    title: "",
    description: "",
  });
  const [dataList, setDataList] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/api");
      const data = await response.json();
      setDataList(data);
    }
    fetchData();
  }, []);

  async function addData() {
    const response = await fetch("http://localhost:3000/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(notes),
    });
    const data = await response.json();
    return data;
  }

  const deleteNoteData = async (id) => {
    const response = await fetch(`http://localhost:3000/api/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  };
  function handleClick() {
    setShow(true);
  }
  function handleChange(event) {
    setNotes({ ...notes, [event.target.name]: event.target.value });
  }
  const addNote = async () => {
    const response = await addData();
    setDataList([...dataList, response]);
    setNotes({ title: "", description: "" });
  };
  const deleteNote = async (id) => {
    const response = await deleteNoteData(id);
    setDataList(dataList.filter((note) => note._id !== id));
    return response;
  };

  return (
    <div className="bg-[#f7f3e2] bg-[url('./assets/cubes.png')] px-12 py-6 flex flex-col gap-2 min-w-[100%] min-h-full overflow-x-hidden">
      <div className="flex flex-col items-center justify-start p-4 ">
        <div className="flex flex-col text-black p-2 bg-[#f7efcd] drop-shadow-lg rounded-lg">
          {show && (
            <Input
              className=" border-b-2 bg-transparent w-[400px] h-[50px] text-xl p-2"
              type="text"
              name="title"
              value={notes.title}
              placeholder="Title"
              onChange={handleChange}
              required={true}
            />
          )}
          <textarea
            style={{ resize: "none" }}
            className="bg-transparent w-[400px] h-fit text-xl p-2"
            type="text"
            name="description"
            value={notes.description}
            placeholder="Description"
            onChange={handleChange}
            onClick={handleClick}
            required={true}
            rows={show ? "3" : "1"}
          />

          <Zoom in={show}>
            <AddIcon
              fontSize="large"
              onClick={addNote}
              className="relative top-[25px] left-[390px] font-bold text-white capitalize bg-blue-500 rounded-full hover:bg-blue-700"
            />
          </Zoom>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-start w-full h-full gap-5 text-black ">
        {dataList != null &&
          dataList.map((d) => (
            <Zoom key={d._id} in={true}>
              <div className="w-[300px] mb-7 text-black  p-2 bg-[#f7efcd] drop-shadow-lg h-[120px] rounded-lg">
                <h1 className="text-xl font-bold border-b-2">{d.title}</h1>
                <p className="text-lg">{d.description}</p>
                <div className="relative top-[70px] left-[280px]">
                  <DeleteForeverIcon
                    className="w-8 h-8 text-xl font-bold text-center text-white capitalize bg-blue-500 rounded-full hover:bg-blue-700"
                    onClick={() => deleteNote(d._id)}
                  />
                </div>
              </div>
            </Zoom>
          ))}
      </div>
    </div>
  );
};

export default Notes;
