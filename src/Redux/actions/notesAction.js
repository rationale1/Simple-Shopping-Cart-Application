export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const SET_INPUT_TITLE = "SET_INPUT_TITLE";
export const SET_INPUT_CONTENT = "SET_INPUT_CONTENT";
export const RESET_INPUT = "RESET_INPUT";
export const SET_INPUT_VALUES = "SET_INPUT_VALUES";

export const setInputValues = (title1 = null, content1 = null) => ({
  type: SET_INPUT_VALUES,
  payload: { title1, content1 },
});

export const addTodo = note => ({
  type: ADD_TODO,
  payload: note,
});

export const removeTodo = index => ({
  type: REMOVE_TODO,
  payload: { index },
});

export const updateTodo = (index, note) => ({
  type: UPDATE_TODO,
  payload: { index, note },
});

export const setInputTitle = title => ({
  type: SET_INPUT_TITLE,
  payload: title,
});

export const setInputContent = content => ({
  type: SET_INPUT_CONTENT,
  payload: content,
});

export const resetInputs = () => ({
  type: RESET_INPUT,
});

// 40:04
