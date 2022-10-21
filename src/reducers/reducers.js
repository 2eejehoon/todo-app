import { TODO_GET_FAIL, TODO_GET_SUCCESS } from "../actions/todoAction";

const initialState = {
  success: false,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_GET_SUCCESS:
      return {
        ...state,
        success: true,
        data: action.payload,
      };

    case TODO_GET_FAIL:
      return {
        ...state,
        success: false,
      };

    default:
      return state;
  }
};

export default todoReducer;
