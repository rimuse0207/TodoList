import React from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";
const TodoLists = styled.div`
  min-height: 320px;
  max-height: 513px;

  overflow-y: auto;
`;

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <TodoLists>
      {todos.map(todo => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        ></TodoListItem>
      ))}
    </TodoLists>
  );
};

export default TodoList;
