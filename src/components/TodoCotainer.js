import styled from "styled-components";
import { Todo } from "./Todo";
import { useState } from "react";

const Container = styled.ul`
  width: 90vw;
  height: 80vh;
  list-style-type: none;
`;

const FilterWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90vw;
  height: 5vh;
`;

const Button = styled.button`
  background-color: #f9f9f9;
  border-radius: 15px;
  border: #f9f9f9 solid 2px;
  margin: 5px;
  padding: 5px;
  font-size: 12px;
  color: darkgray;

  &.bold {
    border: black solid 2px;
    color: black;
  }
`;

export const TodoContainer = ({
  todos,
  handleUpdate,
  handleDelete,
  handleComplete,
}) => {
  const [filterBy, setFilterBy] = useState("전체");

  const handleButtonClick = (e) => {
    setFilterBy(e.target.value);
  };
  const completeTodos = todos.filter((el) => el.complete === true);
  const incompleteTodos = todos.filter((el) => el.complete === false);
  return (
    <>
      <FilterWrapper>
        <Button
          type="button"
          value="전체"
          onClick={handleButtonClick}
          className={filterBy === "전체" ? "bold" : null}
        >
          전체
        </Button>
        <Button
          type="button"
          value="완료"
          onClick={handleButtonClick}
          className={filterBy === "완료" ? "bold" : null}
        >
          완료
        </Button>
        <Button
          type="button"
          value="미완료"
          onClick={handleButtonClick}
          className={filterBy === "미완료" ? "bold" : null}
        >
          미완료
        </Button>
      </FilterWrapper>
      <Container>
        {filterBy === "전체"
          ? todos.map((todo) => {
              return (
                <Todo
                  key={todo.id}
                  todo={todo}
                  handleUpdate={handleUpdate}
                  handleDelete={handleDelete}
                  handleComplete={handleComplete}
                ></Todo>
              );
            })
          : filterBy === "완료"
          ? completeTodos.map((todo) => {
              return (
                <Todo
                  key={todo.id}
                  todo={todo}
                  handleUpdate={handleUpdate}
                  handleDelete={handleDelete}
                  handleComplete={handleComplete}
                ></Todo>
              );
            })
          : incompleteTodos.map((todo) => {
              return (
                <Todo
                  key={todo.id}
                  todo={todo}
                  handleUpdate={handleUpdate}
                  handleDelete={handleDelete}
                  handleComplete={handleComplete}
                ></Todo>
              );
            })}
      </Container>
    </>
  );
};
