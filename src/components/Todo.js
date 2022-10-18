import { useState, useRef } from "react";
import styled from "styled-components";
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
  padding: 5px;
  font-size: 15px;
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
  width: 10vw;
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

export const Todo = ({ todo, handleUpdate, handleDelete, handleComplete }) => {
  const [value, setValue] = useState(todo.value);
  const [updateId, setUpdateId] = useState("");
  const inputEl = useRef(null);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleUpdateClick = (id) => {
    setUpdateId(id);
    setTimeout(() => {
      inputEl.current.focus();
    });
  };

  const handleSaveClick = () => {
    setUpdateId("");
  };

  return (
    <>
      {updateId === todo.id ? (
        // 수정
        <Li>
          <CompleteButton
            type="submit"
            checked={todo.checked}
            onClick={() => handleComplete(todo.id)}
          >
            {todo.complete ? <FontAwesomeIcon icon={faCheck} /> : null}
          </CompleteButton>
          <Input
            type="text"
            value={value}
            ref={inputEl}
            onChange={handleChange}
            onKeyPress={(e) => {
              e.key === "Enter" && handleUpdate(e, todo.id);
              e.key === "Enter" && setUpdateId("");
            }}
          ></Input>
          <ButtonWrapper>
            <Button type="button" onClick={handleSaveClick}>
              <FontAwesomeIcon icon={faFloppyDisk} />
            </Button>
            <Button type="submit" onClick={() => handleDelete(todo.id)}>
              <FontAwesomeIcon icon={faTrashCan} />
            </Button>
          </ButtonWrapper>
        </Li>
      ) : (
        // 그냥
        <Li>
          <CompleteButton
            type="submit"
            checked={todo.checked}
            onClick={() => handleComplete(todo.id)}
          >
            {todo.complete ? <FontAwesomeIcon icon={faCheck} /> : null}
          </CompleteButton>
          <Div className={todo.complete ? "complete" : null}>{value}</Div>
          <ButtonWrapper>
            <Button type="button" onClick={() => handleUpdateClick(todo.id)}>
              <FontAwesomeIcon icon={faPencil} />
            </Button>
            <Button type="submit" onClick={() => handleDelete(todo.id)}>
              <FontAwesomeIcon icon={faTrashCan} />
            </Button>
          </ButtonWrapper>
        </Li>
      )}
    </>
  );
};
