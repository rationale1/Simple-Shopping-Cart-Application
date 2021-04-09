import React, { createContext, useReducer } from "react";

const initState = {
  items: [
    { id: 1, task: "Meeting With Wife" },
    { id: 2, task: "Meeting With Boss" },
  ],
  id: 0,
  item: "",
  editItem: false,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        items: [...state.items, payload],
      };

    case "DELETE_TODO":
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload),
      };

    case "UPDATE_TODO":
      return {
        ...state,
        items: state.items.map(item =>
          item.id === payload.id ? payload : item,
        ),
      };

    case "SET_INPUT":
      return {
        ...state,
        item: payload,
        id: Math.random(),
      };

    case "RESET_INPUT":
      return { ...state, item: "", id: null };

    case "CLEAR_TODO":
      return { ...state, items: [] };

    case "EDIT_TODO":
      return {
        ...state,
        id: payload.id,
        item: payload.task,
      };

    default:
      return state;
  }
};

export const CrudProvider = createContext();

const CrudContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const addTodo = todo => dispatch({ type: "ADD_TODO", payload: todo });

  const deleteTodo = id => dispatch({ type: "DELETE_TODO", payload: id });

  const updateTodo = item => dispatch({ type: "UPDATE_TODO", payload: item });

  const set_input = item => dispatch({ type: "SET_INPUT", payload: item });

  const reset_input = () => dispatch({ type: "RESET_INPUT" });

  const clear_todo = () => dispatch({ type: "CLEAR_TODO" });

  const editTodo = item => dispatch({ type: "EDIT_TODO", payload: item });

  const { items, item, id, editItem } = state;
  return (
    <CrudProvider.Provider
      value={{
        items,
        item,
        id,
        editItem,
        addTodo,
        set_input,
        reset_input,
        deleteTodo,
        updateTodo,
        clear_todo,
        editTodo,
      }}>
      {children}
    </CrudProvider.Provider>
  );
};

export default CrudContext;
