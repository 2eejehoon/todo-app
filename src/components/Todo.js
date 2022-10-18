import { useState, useRef } from "react";
import styled from "styled-components";
import { fetchDelete, fetchPatch, fetchPut } from "../util/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPencil,
  faFloppyDisk,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const Li = styled.li`
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  width: 90vw;
  height: 10vh;
  margin-top: 5px;
  font-size: 15px;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  padding: 5px;
`;

const Input = styled.input`
  background-color: #f9f9f9;
  border: none;
  width: 65vw;
  font-size: 15px;
  &:focus {
    outline: none;
  }
`;

const Div = styled.div`
  width: 65vw;
  &.complete {
    text-decoration: line-through wavy tomato 2px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 40px;
`;

const Button = styled.button`
  background-color: #f9f9f9;
  border: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;

const CompleteButton = styled(Button)`
  border: black solid 2px;
`;

export const Todo = ({ todo }) => {
  const [value, setValue] = useState(todo.value);
  const [updateId, setUpdateId] = useState("");
  const inputEl = useRef(null);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleUpdateClick = (e, id) => {
    e.preventDefault();
    setUpdateId(id);
    setTimeout(() => {
      inputEl.current.focus();
    });
  };

  const handleDelete = (id) => {
    fetchDelete("http://localhost:3001/todos/", id);
  };

  const handleComplete = (id, complete) => {
    let data = {
      complete: !complete,
    };
    fetchPatch("http://localhost:3001/todos/", id, data);
  };

  const handleSubmit = (e, todo) => {
    e.preventDefault();
    let data = {
      ...todo,
      value: e.target[1].value,
    };
    fetchPut("http://localhost:3001/todos/", todo.id, data);
  };

  return (
    <>
      {updateId === todo.id ? (
        // 수정
        <Li>
          <Form onSubmit={(e) => handleSubmit(e, todo)}>
            <CompleteButton
              type="submit"
              onClick={() => handleComplete(todo.id, todo.complete)}
            >
              {todo.complete ? <FontAwesomeIcon icon={faCheck} /> : null}
            </CompleteButton>
            <Input
              type="text"
              value={value}
              ref={inputEl}
              onChange={handleChange}
            ></Input>
            <ButtonWrapper>
              <Button type="submit">
                <FontAwesomeIcon icon={faFloppyDisk} />
              </Button>
              <Button type="submit" onClick={() => handleDelete(todo.id)}>
                <FontAwesomeIcon icon={faTrashCan} />
              </Button>
            </ButtonWrapper>
          </Form>
        </Li>
      ) : (
        // 그냥
        <Li>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <CompleteButton
              type="submit"
              onClick={() => handleComplete(todo.id, todo.complete)}
            >
              {todo.complete ? <FontAwesomeIcon icon={faCheck} /> : null}
            </CompleteButton>
            <Div className={todo.complete ? "complete" : null}>{value}</Div>
            <ButtonWrapper>
              <Button
                type="button"
                onClick={(e) => handleUpdateClick(e, todo.id)}
              >
                <FontAwesomeIcon icon={faPencil} />
              </Button>
              <Button type="submit">
                <FontAwesomeIcon
                  icon={faTrashCan}
                  onClick={() => handleDelete(todo.id)}
                />
              </Button>
            </ButtonWrapper>
          </Form>
        </Li>
      )}
    </>
  );
};
