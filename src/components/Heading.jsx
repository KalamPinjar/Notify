import NotesIcon from "@mui/icons-material/Notes";

const Heading = () => {

  return (
    <menu className="h-[70px] drop-shadow-md bg-[#e6c537] flex flex-col justify-start items-start px-6 py-3">
      <a href="/">
        <li className="text-3xl font-bold text-blue-500 drop-shadow">
          <NotesIcon />
          Note It
        </li>
      </a>
    </menu>
  );
};

export default Heading;
