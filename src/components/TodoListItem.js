import React from "react";
import styled from "styled-components";

const TodoListItems = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  &:nth-child(even) {
    background-color: #f8f9fa;
  }
`;
const CheckBox = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
`;
const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1;
  ${props =>
    props.checked ? "color: #22b8cf; text-decoration: line-through;" : ""}
`;
const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: ff8787;
  }
`;

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;
  return (
    <TodoListItems>
      <CheckBox onClick={() => onToggle(id)}>
        {checked ? "✅" : "✔️"}　<Text checked={checked}>{text}</Text>
      </CheckBox>
      <Remove onClick={() => onRemove(id)}>🗑</Remove>
    </TodoListItems>
  );
};

export default TodoListItem;
