import { ADD_TODO, UPDATE_TODO, REMOVE_TODO } from "../actions/notesAction";

const initState = {
  notes: [],
};

const notesReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      const newNotes = [...state.notes, payload];
      return {
        ...state,
        notes: newNotes,
      };
    }

    case REMOVE_TODO: {
      const { index } = payload;
      const notes = state.notes;

      delete notes[index];
      return {
        ...state,
        notes,
      };
    }

    case UPDATE_TODO: {
      const { index, note } = payload;
      const newNotes = state.notes;
      newNotes[index] = note;
      return {
        ...state,
        notes: newNotes,
      };
    }

    default:
      return state;
  }
};

export default notesReducer;
