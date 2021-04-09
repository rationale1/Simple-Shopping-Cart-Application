import axios from "axios";
const url = `http://localhost:5000/employee`;

export const GET_DATA = "GET_DATA";
export const DELETE_DATA = "DELETE_DATA";
export const ADD_DATA = "ADD_DATA";

export const getData = () => async dispatch => {
  try {
    const { data } = await axios.get(url);

    dispatch({
      type: GET_DATA,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteData = _id => async dispatch => {
  try {
    const { data } = await axios.delete(
      `http://localhost:5000/employee/${_id}`,
    );

    dispatch({
      type: DELETE_DATA,
      payload: _id,
      message: data.message,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: "ERROR_MESSAGE",
      message: data.message,
    });
  }
};

export const addData = employee => async dispatch => {
  try {
    await axios.post(url, employee);

    dispatch({
      type: ADD_DATA,
      payload: employee,
    });
  } catch (error) {
    console.log(error.message);
  }
};
