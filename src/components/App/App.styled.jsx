import styled from 'styled-components';


export const Container = styled.div`
    background-image:  url(${props=> props.bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: 50% 50%;
    height: 100vh;
    
    color: #fff;
    text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em black;
    @media screen and (min-width:480px){
        display: flex;
    }
`;

export const Message = styled.h2`
padding-top: 12px;
margin-top: 20px;
text-align: center;
font-style: italic;
font-weight: 500;
font-size: 20px;
width: 80vw;
text-shadow: 0px 0px 0.8em black, 0 0 0.4em black;
`;