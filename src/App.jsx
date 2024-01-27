import React from "react";
import Button from "./components/UI/Button";
import Stopwatch from "./components/Timer/Stopwatch";

const App = () => {
  return (
    <main className="container mt-2">
      <div className="w-screen flex justify-center items-center space-x-5">
        <Stopwatch />
      </div>
    </main>
  );
};

export default App;
