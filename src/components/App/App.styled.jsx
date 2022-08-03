import styled from 'styled-components';
import background1 from '../../images/background1.jpg'

export const Container = styled.div`

    background-image: url(${background1});
    background-color: rgba(162, 196, 197,1);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    display: flex;
    
   
    color: #010101;
`;

export const Message = styled.p`
text-align: center;
font-style: italic;
font-size: 20px;
width: 80vw;
`;