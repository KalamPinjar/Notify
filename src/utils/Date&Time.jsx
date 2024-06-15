import { useState } from "react";

export const Date1 = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <h1 className="text-3xl font-bold underline">{time}</h1>
    </div>
  );
};

export const Time1 = () => {
  const [date, setDate] = useState(new Date().toLocaleTimeString());

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <h1 className="text-3xl font-bold underline">{date}</h1>
      <button onClick={() => setDate(new Date().toLocaleTimeString())}>
        Click me
      </button>
    </div>
  );
};
