import { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/reducer";

const timeTrackingContext = createContext();

const TimeTrackingContextProvider = ({ children }) => {
  const intitalState = {
    showModal: false,
    todos: [],
    time: {},
  };
  const [state, dispatch] = useReducer(reducer, intitalState);
  return (
    <timeTrackingContext.Provider value={{ state, dispatch }}>
      {children}
    </timeTrackingContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(timeTrackingContext);
};

export default TimeTrackingContextProvider;
