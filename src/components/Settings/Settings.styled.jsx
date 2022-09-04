import styled from "styled-components";

export const Wrapper = styled.div`
justify-content: flex-end;
position: sticky;
text-align: end;
padding: 4px;
font-weight: 500;
display: flex;
height: 36px;
align-items: center;
color: grey;
text-shadow: 0px 0px 1px black, 0 0 0.4em black;
@media screen and (min-width:480px){
    position: absolute;
    right: 8px;
    top: 0;
}

`;