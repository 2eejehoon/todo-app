import { initialState } from "./initialState";
import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, UPDATE_TODO } from "../actions";

const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            ...action.payload,
          },
        ],
      });
    case DELETE_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos.filter((todo) => {
            return todo.id !== action.payload.id;
          }),
        ],
      });
    case UPDATE_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos.map((todo) => {
            return todo.id === action.payload.id
              ? {
                  ...todo,
                  value: action.payload.value,
                }
              : todo;
          }),
        ],
      });
    case COMPLETE_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos.map((todo) => {
            return todo.id === action.payload.id
              ? {
                  ...todo,
                  complete: !todo.complete,
                }
              : todo;
          }),
        ],
      });
    default:
      return state;
  }
};

export default toDoReducer;
