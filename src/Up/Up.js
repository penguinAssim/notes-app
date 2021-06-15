import React from "react";
import styled from "styled-components";
import Logo, { height2 } from "./Logo";
import SearchItems, { height } from "./SearchItems";
console.log(Math.min(height, height2));
const UpContainer = styled.div`
  width: 100%;
  height: ${Math.max(height, height2)}px;
  over-flow: hidden;
  display: flex;
  justify-items: center;
`;
const Up = () => {
  return (
    <UpContainer>
      <Logo></Logo>
      <SearchItems></SearchItems>
    </UpContainer>
  );
};
export default Up;
/*
 Up 





 Search Items 

position: absolute;
width: 1002px;
height: 68px;
left: 383px;
top: 69px;

filter: drop-shadow(4px 4px 10px rgba(255, 255, 255, 0.25));


 Search 

position: absolute;
width: 629px;
height: 68px;
left: 383px;
top: 69px;

background: #EDECEC;
border: 1px solid #000000;
box-sizing: border-box;
border-radius: 5px;


 Search options 

position: absolute;
width: 299px;
height: 68px;
left: 1086px;
top: 69px;



/* Items 

position: absolute;
width: 299px;
height: 68px;
left: 1385px;
top: 69px;

background: #EDECEC;
border: 1px solid #000000;
box-sizing: border-box;
border-radius: 5px;
transform: matrix(-1, 0, 0, 1, 0, 0);


/* Arrow 

position: absolute;
width: 72px;
height: 66px;
left: 1313px;
top: 70px;



/* Arrow 

position: absolute;
width: 42px;
height: 15.32px;
left: 1369px;
top: 89.55px;

background: #E63B15;
transform: rotate(-180deg);


/* Rectangle 1 

position: absolute;
width: 72px;
height: 66px;
left: 1313px;
top: 70px;

background: #F55532;


/* Polygon 1 

position: absolute;
width: 30px;
height: 21.18px;
left: 1364px;
top: 112px;

background: #EDECEC;
transform: rotate(-180deg);


/* Logo *

position: absolute;
width: 270px;
height: 86px;
left: 58px;
top: 58px;


/* Name *

position: absolute;
width: 187px;
height: 86px;
left: 141px;
top: 58px;



/* ! *

position: absolute;
width: 39px;
height: 84px;
left: 289px;
top: 60px;

font-family: Work Sans;
font-style: normal;
font-weight: bold;
font-size: 100px;
line-height: 117px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.02em;

color: #F55532;



/* noted *

position: absolute;
width: 174px;
height: 70px;
left: 141px;
top: 58px;

font-family: Work Sans;
font-style: normal;
font-weight: bold;
font-size: 60px;
line-height: 70px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.02em;

color: #C4C4C4;



/* Mask *

position: absolute;
width: 158px;
height: 189px;
left: 143px;
top: 28px;

background: #C4C4C4;


/* notes 1 *

position: absolute;
width: 74px;
height: 74px;
left: 58px;
top: 58px;



/* Group *
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;



/* Group *

position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;



/* Vector *

position: absolute;
left: 0%;
right: 23.44%;
top: 5.86%;
bottom: 70.51%;

background: #4D5A68;


/* Vector *

position: absolute;
left: 38.28%;
right: 23.44%;
top: 5.86%;
bottom: 70.51%;

background: #304653;


/* Vector *

position: absolute;
left: 0%;
right: 23.44%;
top: 23.63%;
bottom: 0%;

background: #FFCA42;


/* Vector *

position: absolute;
left: 38.28%;
right: 23.44%;
top: 23.63%;
bottom: 0%;

background: #FFAF3E;


/* Vector *

position: absolute;
left: 11.72%;
right: 82.42%;
top: 0%;
bottom: 82.23%;

background: #CAD4E4


/* Vector *

position: absolute;
left: 23.63%;
right: 70.51%;
top: 0%;
bottom: 82.23%;

background: #CAD4E4;

/* Vector *

position: absolute;
left: 35.35%;
right: 58.79%;
top: 0%;
bottom: 82.23%;

background: #CAD4E4;


/* Vector *

position: absolute;
left: 47.27%;
right: 46.88%;
top: 0%;
bottom: 82.23%;

background: #ADB5CC;


/* Vector *

position: absolute;
left: 58.98%;
right: 35.16%;
top: 0%;
bottom: 82.23%;

background: #ADB5CC;


/* Vector *

position: absolute;
left: 11.72%;
right: 58.79%;
top: 76.37%;
bottom: 17.77%;

background: #DD864D;


/* Vector *

position: absolute;
left: 11.72%;
right: 64.65%;
top: 58.79%;
bottom: 35.35%;

background: #DD864D;


/* Vector *

position: absolute;
left: 11.72%;
right: 70.51%;
top: 41.21%;
bottom: 52.93%;

background: #DD864D;


/* Group *

position: absolute;
left: 47.25%;
right: 0%;
top: 5.31%;
bottom: 11.91%;



/* Group *

position: absolute;
left: 80.06%;
right: 0.07%;
top: 24.25%;
bottom: 33.58%;



/* Vector *
position: absolute;
left: 80.06%;
right: 0.07%;
top: 24.25%;
bottom: 33.58%;

background: #304653;


/* Vector *

position: absolute;
left: 79.2%;
right: 0%;
top: 5.31%;
bottom: 71.51%;

background: #4D5A68;
/* Vector *

position: absolute;
left: 83.88%;
right: 0%;
top: 6.49%;
bottom: 71.51%;

background: #304653;


/* Vector *

position: absolute;
left: 51.17%;
right: 5.58%;
top: 17.32%;
bottom: 25.64%;

background: #F55532;


/* Vector *

position: absolute;
left: 59.04%;
right: 5.58%;
top: 21.72%;
bottom: 25.64%;

background: #E63B15;


/* Vector *

position: absolute;
left: 47.25%;
right: 33%;
top: 62.96%;
bottom: 11.91%;

background: #CAD4E4;


/* Vector *

position: absolute;
left: 48.73%;
right: 33%;
top: 64.24%;
bottom: 11.91%;

background: #ADB5CC;


/* Vector *

position: absolute;
left: 38.28%;
right: 58.79%;
top: 0%;
bottom: 82.23%;

background: #ADB5CC;


/* Vector *

position: absolute;
left: 38.28%;
right: 58.79%;
top: 76.37%;
bottom: 17.77%;

background: #D36836;

*/
