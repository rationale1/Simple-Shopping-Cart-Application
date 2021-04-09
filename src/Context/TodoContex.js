import React, { createContext, useReducer } from "react";

export const TodoProvider = createContext();

const initState = {
  items: [
    { id: 1, task: "Buy Milk", done: false },
    { id: 2, task: "Meeting With Wife", done: false },
  ],

  currentItem: null,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        items: [...state.items, payload],
      };

    case "DELETE_TODO":
      const newTodo = state.items.filter(item => item.id !== payload);
      return {
        ...state,
        items: newTodo,
      };

    case "UPDATE_TODO":
      const updateTodo = state.items.map(item =>
        item.id === payload.id ? payload : item,
      );
      return {
        ...state,
        items: updateTodo,
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        items: state.items.map(item =>
          item.id === payload ? { ...item, done: !item.done } : item,
        ),
      };

    case "SET_TODO":
      return {
        ...state,
        currentItem: payload,
      };

    default:
      return state;
  }
};

const TodoContex = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const { currentItem } = state;

  const addTodo = item => {
    dispatch({
      type: "ADD_TODO",
      payload: item,
    });
  };

  const removeTodo = id => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };

  const updateTodo = item => {
    dispatch({
      type: "UPDATE_TODO",
      payload: item,
    });
  };

  const toggleTodo = id => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: id,
    });
  };

  const setTodo = item => {
    dispatch({
      type: "SET_TODO",
      payload: item,
    });
  };

  return (
    <TodoProvider.Provider
      value={{
        state,
        addTodo,
        removeTodo,
        updateTodo,
        toggleTodo,
        setTodo,
        currentItem,
      }}>
      {children}
    </TodoProvider.Provider>
  );
};

export default TodoContex;
