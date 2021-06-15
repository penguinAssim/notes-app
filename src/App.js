import React, { createContext, useContext } from "react";
import styled from "styled-components";
import Up from "./Up/Up";
import Notes from "./Notes";
import Add from "./Add";
const Container = styled.div`
  background-color: #121212;
  width: 100%;
  min-height: 100vh;
  padding: max(35px, 2vw);
`;
const context = createContext();
export const App = () => {
  return (
    <Container>
      <Up></Up>
      {/* <Notes></Notes> */}
      <Add></Add>
    </Container>
  );
};
