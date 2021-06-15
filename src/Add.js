import React from "react";
import styled from "styled-components";
const AddContainer = styled.button`
  position: absolute;
  width: max(80px, 8vw);
  height: max(80px, 8vw);
  border-radius: 50%;
  background-color: #f55532;
  bottom: max(50px, 5vw);
  right: max(50px, 5vw);
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  z-index: 4;
`;
const Line1 = styled.div`
  height: 5px;
  transform-origin: center center;
  background-color: #edecec;
  z-index: 5;
  width: 60%;
  border-radius: 20%;
  position: absolute;
  transform: rotate(90deg);
`;
const Line2 = styled.div`
  height: 5px;
  transform-origin: center center;
  background-color: #edecec;
  z-index: 5;
  border-radius: 20%;
  width: 60%;
  position: absolute;
`;
const Add = () => {
  return (
    <AddContainer>
      <Line1></Line1>
      <Line2></Line2>
    </AddContainer>
  );
};
export default Add;
