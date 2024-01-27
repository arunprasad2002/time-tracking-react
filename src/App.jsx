import React, { useEffect } from "react";
import Stopwatch from "./components/Timer/Stopwatch";
import { useGlobalContext } from "./context/context";
import TodoModal from "./components/Modal/TodoModal";

const App = () => {
  const {
    state: { showModal, todos },
    dispatch,
  } = useGlobalContext();

  // Load Todos from local storage on component mount
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      dispatch({ type: "SET_TODOS", payload: JSON.parse(storedTodos) });
    }
  }, []);

  return (
    <main className="container mt-2">
      <div className="w-screen flex justify-center items-center space-x-5">
        <Stopwatch />
        <TodoModal showModal={showModal} />
      </div>
      <h1 className="mt-10 font-bold text-xl text-center w-screen">
        Completed Task
      </h1>
      <ul className="flex justify-center flex-col space-y-2 w-screen mt-5 items-center">
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
