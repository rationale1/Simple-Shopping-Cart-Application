import {
  SET_INPUT_TITLE,
  SET_INPUT_CONTENT,
  RESET_INPUT,
  SET_INPUT_VALUES,
} from "../actions/notesAction";

const initState = {
  id: -1,
  title: "",
  content: "",
};

const inputReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_INPUT_TITLE:
      return {
        ...state,
        title: payload,
      };

    case SET_INPUT_VALUES: {
      return {
        ...state,
        title: payload.title1,
        content: payload.content1,
      };
    }

    case SET_INPUT_CONTENT:
      return {
        ...state,
        content: payload,
      };

    case RESET_INPUT:
      return initState;

    default:
      return state;
  }
};

export default inputReducer;
