import axios from 'axios';

export const TODO_GET_SUCCESS = 'TODO_SUCCESS';
export const TODO_GET_FAIL = 'TODO_FAIL';

export const fetchTodo = (url) => async (dispatch) => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    dispatch({
      type: TODO_GET_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TODO_GET_FAIL,
    });
  }
};
