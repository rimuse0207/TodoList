import React, { useState, useRef, useCallback } from "react";
import styled, { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/ToDoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const Body = createGlobalStyle`
  body{
    margin:0;
    padding:0;
    background-color: #e9ecef;
  }
  
  
`;

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Insert Your TodoList", checked: true },
    { id: 2, text: "You can do it!", checked: true },
    { id: 3, text: "I can do it", checked: false }
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = { id: nextId.current, text, checked: false };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos]
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <>
      <Body></Body>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}></TodoInsert>
        <TodoList
          todos={todos}
          onRemove={onRemove}
          onToggle={onToggle}
        ></TodoList>
      </TodoTemplate>
    </>
  );
}

export default App;
