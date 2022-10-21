/* eslint-disable react/prop-types */
import styled from 'styled-components';
import Header from '../components/Header';
import Form from '../components/Form';
import TodoContainer from '../components/TodoCotainer';
import Loading from '../components/Loading';

const Wrapper = styled.main`
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const TodoList = ({ todos, isPending }) => {
  return (
    <>
      <Wrapper>
        <Header />
        <Form />
        {isPending ? <Loading /> : <TodoContainer todos={todos} />}
      </Wrapper>
    </>
  );
};

export default TodoList;
