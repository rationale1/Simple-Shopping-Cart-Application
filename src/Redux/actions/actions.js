import Axios from "axios";
const url = "https://jsonplaceholder.typicode.com/posts";

export const fetchData = () => async dispatch => {
  dispatch({ type: "FETCH_POSTS" });

  try {
    const response = await Axios.get(url);

    dispatch({ type: "FETCH_POSTS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_POSTS_FAILURE", error });
  }
};

export const fetchPosts = () => async dispatch => {
  const response = await Axios.get(url);

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};
