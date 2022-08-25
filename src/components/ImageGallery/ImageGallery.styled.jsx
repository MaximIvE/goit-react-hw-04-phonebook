import styled from "styled-components";

export const Gallery = styled.ul`
    display: grid;
    max-width: 72vw ;
    grid-template-columns: repeat(5, minmax(280px, 1fr));
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 16px;
    margin-left: auto;
    margin-right: auto;
`;

export const Item = styled.li`
    height: calc(72vh / 4);
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover{
    transform: scale(1.03);
    cursor: pointer;
  }
`;