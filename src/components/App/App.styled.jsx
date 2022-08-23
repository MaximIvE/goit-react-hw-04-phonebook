import styled from 'styled-components';
import background1 from '../../images/background1.jpg'
import { color } from 'styles/colors';


export const Container = styled.div`

    background-image: url(${background1});
    background-color: ${color.backgroundBody};
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    display: flex;
    color: #010101;
`;

export const Message = styled.h2`
padding-top: 12px;
margin-top: 20px;
text-align: center;
font-style: italic;
font-weight: 400;
font-size: 20px;
width: 80vw;
`;