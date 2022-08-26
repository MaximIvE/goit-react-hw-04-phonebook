import styled from "styled-components";

export const LangaugeStyled = styled.div`
  margin:8px;
  padding:4px;
  border: 1px solid grey;
  border-radius: 15px;
  background-color: rgba(255,255,255,0.8);
  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0, 0.1, 1);

  &:hover{
        background-color: rgba(255,255,255,1);
    };
`;

export const Btn = styled.button`
width:40px;
background-color:  rgba(0,0,0,0);
cursor: pointer;
border:none;

color: #000;
font-weight: 400;
font-size: 16px;
transition-property: font;
transition-duration: 250ms;
transition-timing-function: cubic-bezier(0, 0, 0.1, 0.9);

    &:hover{
        font-weight: 600;
        background-color: rgba(255,255,255,1);
    };
   
`;