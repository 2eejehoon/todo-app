// action types
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";

// actions creator functions
export const addToDo = (value) => {
  const id = new Date().getTime();
  const createdAt = new Date().toLocaleDateString();
  return {
    type: ADD_TODO,
    payload: {
      value,
      id,
      createdAt,
      complete: false,
    },
  };
};
export const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  };
};
export const updateToDo = (value, id) => {
  return {
    type: UPDATE_TODO,
    payload: {
      value,
      id,
    },
  };
};
export const completeTodo = (id) => {
  return {
    type: COMPLETE_TODO,
    payload: {
      id,
    },
  };
};
