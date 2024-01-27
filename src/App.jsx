import React from "react";
import Stopwatch from "./components/Timer/Stopwatch";
import { useGlobalContext } from "./context/context";
import TodoModal from "./components/Modal/TodoModal";

const App = () => {
  const {
    state: { showModal, todos },
  } = useGlobalContext();

  return (
    <main className="container mt-2">
      <div className="w-screen flex justify-center items-center space-x-5">
        <Stopwatch />
        <TodoModal showModal={showModal} />
      </div>
      <h1 className="mt-10 font-bold text-xl text-center w-screen">
        Completed Task
      </h1>
      <ul className="flex justify-center w-screen mt-5 items-center">
        {todos &&
          todos.map((item, index) => {
            return (
              <li
                key={index}
                className="text-lg border w-[20rem] text-center p-2 rounded-full"
              >
                {item.name}
              </li>
            );
          })}
      </ul>
      <div></div>
    </main>
  );
};

export default App;
