import React from "react";
import styled from "styled-components";
import Imagesrc from "../Images/notes.svg";
const scale = window.innerWidth > 1000 ? 0.8 : window.innerWidth / 1400;
export const height2 = 100 * scale;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  overflow: hidden;
  width: auto;
  float: left;
  grid-column: 1 / ${Math.ceil((74 * scale + 170 * scale) / 16)};
`;
const Image = styled.img`
  width: ${74 * scale}px;
  height: ${74 * scale}px;
`;
const Name = styled.div`
  display: inline-block;
  position: relative;
  width: ${170 * scale}px;
`;
const Noted = styled.span`
  color: #c4c4c4;
  font-family: work-sans, sans-serif;
  font-size: ${60 * scale}px;
  font-weight: bold;
`;
const Excl = styled.span`
  color: #f55532;
  font-family: work-sans, sans-serif;
  font-size: ${100 * scale}px;
  font-weight: bold;
  position: absolute;
  right: ${-9 * scale}px;
  top: ${-18 * scale}px;
`;
const Logo = () => {
  return (
    <LogoContainer>
      <Image src={Imagesrc}></Image>
      <Name>
        <Noted>Noted</Noted>
        <Excl>!</Excl>
      </Name>
    </LogoContainer>
  );
};
export default Logo;
