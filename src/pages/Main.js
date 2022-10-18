import styled from "styled-components";
import { Header } from "../components/Header";
import { Form } from "../components/Form";
import { TodoContainer } from "../components/TodoCotainer";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, completeTodo, updateToDo } from "../actions";
import { deleteToDo } from "../actions/index";

const Wrapper = styled.main`
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Main = () => {
  const state = useSelector((state) => state.toDoReducer);
  const { todos } = state;
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    if (e.target[0].value === "") return;
    if (todos.find((el) => el.value === e.target[0].value)) return;
    dispatch(addToDo(e.target[0].value));
  };
  const handleUpdate = (e, id) => {
    dispatch(updateToDo(e.target.value, id));
  };
  const handleDelete = (id) => {
    dispatch(deleteToDo(id));
  };
  const handleComplete = (id) => {
    dispatch(completeTodo(id));
  };

  return (
    <Wrapper>
      <Header />
      <Form handleAdd={handleAdd}></Form>
      <TodoContainer
        todos={todos}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
        handleComplete={handleComplete}
      ></TodoContainer>
    </Wrapper>
  );
};
