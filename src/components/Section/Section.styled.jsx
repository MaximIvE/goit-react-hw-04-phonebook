import styled from "styled-components";

export const Wrapper = styled.div`
padding: 8px;

    &:first-child{
        flex-basis: 20vw;
        box-shadow: inset 0 -2px 1px rgba(193,193,193,0.1), inset -2px -4px 4px rgba(0,0,0,0.2), 0 2px 1px rgba(193,193,193,0.1), 2px 4px 4px rgba(0,0,0,0.2);
        background-color: rgba(0,0,0,0.1);
        border-radius: 4px;
    }
    &:last-child{
        display: flex;
        flex-direction: column;
        align-items: stretch;
        background-color: rgba(0,0,0,0.1);
        border-radius: 4px;
        flex-basis: 80vw;
    }
`;

export const Header = styled.h2`
    text-align: center;
`;