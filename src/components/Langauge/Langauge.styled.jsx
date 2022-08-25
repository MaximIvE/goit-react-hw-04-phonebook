import styled from "styled-components";

export const LangaugeStyled = styled.div`
  margin:4px;
  padding:4px;
`;

export const Btn = styled.button`
width:40px;
background-color:  rgba(0,0,0,0);
cursor: pointer;
border:none;
color: teal;
font-weight: 400;
font-size: 16px;
transition-property: font;
transition-duration: 250ms;
transition-timing-function: cubic-bezier(0, 0, 0.1, 1);

    &:hover{
        font-weight: 600;
    };
   
`;