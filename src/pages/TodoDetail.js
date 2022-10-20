import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../util/useFetch";
import Loading from "../components/Loading";
import { fetchDelete, fetchPut } from "../util/api";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.main`
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  padding: 5px;
`;

const ContentTextarea = styled.input`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: gray solid 1px;
  border-radius: 5px;
  width: 90vw;
  height: 70vh;
  margin-top: 5px;
  font-size: 15px;
  padding: 15px;
`;

const ContentDiv = styled.div`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: gray solid 1px;
  border-radius: 5px;
  width: 90vw;
  height: 70vh;
  margin-top: 5px;
  font-size: 15px;
  padding: 15px;
`;

const Title = styled.h1`
  color: black;
  margin: 0.5em;
  height: 6vh;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90vw;
  height: 5vh;
`;

const Button = styled.button`
  background-color: #f9f9f9;
  border-radius: 15px;
  border: black solid 2px;
  color: black;
  margin: 5px;
  padding: 5px;
  font-size: 12px;
`;

const ExitButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 90vw;
  height: 5vh;
`;

const ExitButton = styled.button`
  background-color: #f0f0f0;
  text-decoration: none;
  color: black;
  border: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;

const TodoDetail = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [content, setContent] = useState("");
  const inputEl = useRef(null);
  const { id } = useParams();
  const [todo, isPending, error] = useFetch(
    `http://localhost:3001/todos/${id}`
  );

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleEditClick = () => {
    setContent(todo.content);
    setIsEdit(!isEdit);
    setTimeout(() => inputEl.current.focus());
  };

  const handleDeleteClick = (id) => {
    fetchDelete("http://localhost:3001/todos/", id);
  };
  const handleUpdate = (e, todo) => {
    e.preventDefault();
    let data = {
      ...todo,
      content: e.target[2].value,
    };
    fetchPut("http://localhost:3001/todos/", id, data);
  };

  return (
    <>
      {error && <div>{error}</div>}
      {isEdit ? (
        <>
          {isPending ? (
            <Loading></Loading>
          ) : (
            <Wrapper>
              <ExitButtonWrapper>
                <ExitButton type="button">
                  <Link to="/">
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                  </Link>
                </ExitButton>
              </ExitButtonWrapper>
              <Title>{todo.value}</Title>
              <Form onSubmit={(e) => handleUpdate(e, todo)}>
                <ButtonWrapper>
                  <Button type="submit">저장</Button>
                  <Button
                    type="submit"
                    onClick={() => handleDeleteClick(todo.id)}
                  >
                    삭제
                  </Button>
                </ButtonWrapper>
                <ContentTextarea
                  type="textarea"
                  ref={inputEl}
                  value={content}
                  onChange={handleChange}
                ></ContentTextarea>
              </Form>
            </Wrapper>
          )}
        </>
      ) : (
        <>
          {isPending ? (
            <Loading></Loading>
          ) : (
            <Wrapper>
              <ExitButtonWrapper>
                <ExitButton type="button">
                  <Link to="/">
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                  </Link>
                </ExitButton>
              </ExitButtonWrapper>
              <Title>{todo.value}</Title>
              <ButtonWrapper>
                <Button type="button" onClick={handleEditClick}>
                  수정
                </Button>
                <Button
                  type="submit"
                  onClick={() => handleDeleteClick(todo.id)}
                >
                  삭제
                </Button>
              </ButtonWrapper>
              <ContentDiv>{todo.content}</ContentDiv>
            </Wrapper>
          )}
        </>
      )}
    </>
  );
};

export default TodoDetail;
