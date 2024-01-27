const reducer = (state, aciont) => {
  const { type } = aciont;
  switch (type) {
    case "SHOW_MODAL":
      return { ...state, showModal: true };
    case "CLOSE_MODAL":
      return { ...state, showModal: false };
    case "ADD_TODO":
      return {
        ...state,
        showModal: false,
        todos: [...state.todos, aciont.payload],
      };

    case "SHOW_MODAL_SAVE":
      return { ...state, time: aciont.payload, showModal: true };
    default:
      return state;
  }
};

export default reducer;
