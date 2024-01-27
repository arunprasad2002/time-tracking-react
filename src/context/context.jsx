import { createContext, useContext, useReducer, useState } from "react";
import reducer from "../reducers/reducer";

const timeTrackingContext = createContext();

const TimeTrackingContextProvider = ({ children }) => {
  const [time, setTime] = useState({
    sec: 0,
    min: 0,
    hr: 0,
  });
  const intitalState = {
    showModal: false,
    todos: [],
    time,
    setTime,
  };
  const [state, dispatch] = useReducer(reducer, intitalState);
  return (
    <timeTrackingContext.Provider value={{ state, dispatch, time, setTime }}>
      {children}
    </timeTrackingContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(timeTrackingContext);
};

export default TimeTrackingContextProvider;
