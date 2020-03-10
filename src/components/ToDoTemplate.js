import React from "react";
import styled from "styled-components";

const TodoTemplates = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;
`;
const Title = styled.div`
  background-color: #22b8cf;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  background-color: white;
`;

const TodoTemplate = ({ children }) => {
  return (
    <TodoTemplates>
      <Title>Today List</Title>
      <Content>{children}</Content>
    </TodoTemplates>
  );
};

export default TodoTemplate;
