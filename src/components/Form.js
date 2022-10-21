import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { fetchAddTodo } from '../util/api';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: lightgrey;
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 50%;
`;

const ClearButton = styled(Button)`
  background-color: grey;
  color: white;
`;

const Input = styled.input`
  background-color: #f9f9f9;
  width: 55vw;
  height: 3vh;
  border: none;
  &:focus {
    outline: none;
  }
`;

const FormWrapper = styled.form`
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  margin: 0.5em;
  border: black solid 2px;
  border-radius: 15px;
  width: 90vw;
  height: 6vh;
  &:focus-within {
    border: black solid 2px;
  }
`;

const Form = () => {
  const [value, setValue] = useState('');
  const [hasText, setHasText] = useState(false);
  const inputEl = useRef(null);

  const handleAddTodo = (e) => {
    e.preventDefault();
    setValue('');

    let data = {
      id: new Date().getTime(),
      value: e.target[0].value,
      createdAt: new Date().toLocaleDateString(),
      complete: false,
      content: '',
    };
    fetchAddTodo('http://localhost:3001/todos/', data);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    setHasText(true);
  };

  const handleClear = () => {
    setValue('');
    setTimeout(() => inputEl.current.focus());
  };

  useEffect(() => {
    if (value === '') {
      setHasText(false);
    }
  }, [value]);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <FormWrapper onSubmit={handleAddTodo}>
      <Input
        type="text"
        ref={inputEl}
        value={value}
        onChange={handleChange}
      ></Input>
      {hasText ? (
        <ClearButton type="button" onClick={handleClear}>
          <FontAwesomeIcon icon={faX} />
        </ClearButton>
      ) : null}
    </FormWrapper>
  );
};

export default Form;
