import styled from 'styled-components';

export const Wrapper = styled.div`
    height:24px;
    width:24px;
    padding-top: 2px;
`;

export const BackgroundBtn = styled.button`
    display: block;
    background-color:  rgba(0,0,0,0);
    cursor: pointer;
    border:none;  
    padding:0;
    margin-left: auto;
    margin-right: auto;
    height:20px;
    transition-property: height;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0, 0, 0.1, 1);
    &:hover{
        height:22px;
    }
`;

export const iconStyle = {
    backgroundColor: "rgba(0,0,0,0)",
    height: "100%",
    width: "auto",
    fill: "teal",
}