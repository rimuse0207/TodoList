import React, { useCallback, useState } from "react";
import styled from "styled-components";

const TodoInserts = styled.form`
  display: flex;
  background-color: #495057;
`;

const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
  &::placeholder {
    color: #dee2e6;
  }
  flex: 1;
`;

const Button = styled.button`
  background: none;
  outline: none;
  border: none;
  background-color: #868e96;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s background ease-in;
  &:hover {
    background-color: #adb5bd;
  }
`;

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");
  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );
  return (
    <TodoInserts onSubmit={onSubmit}>
      <Input
        placeholder="Please Enter Your TodoList."
        value={value}
        onChange={onChange}
      ></Input>
      <Button type="submit">+</Button>
    </TodoInserts>
  );
};

export default TodoInsert;
