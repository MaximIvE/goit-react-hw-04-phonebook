import styled from 'styled-components';
import background1 from '../../images/background1.jpg'

export const Container = styled.div`

    background-image: url(${background1});
    background-color: rgba(162, 196, 197,1);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    display: flex;
    flex-direction: column;
    
    align-items: center;
    // font-size: 40px;
    color: #010101;
`;