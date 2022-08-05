import styled from "styled-components";
import { color } from "./colors";

const {hoverBtn, activeBtn} = color.backgroundBtn;
const {shInset1, shInset2, shHover1, shHover2, shActive1, shActive2} = color.shadowBtn;
export const Button = styled.button`
    border:none;
    // font:inherit;
    cursor: pointer;
    outline: none;
    border-radius: 4px;
    box-shadow: inset -2px -2px 2px ${shInset1}, inset 2px 2px 2px ${shInset2}, 0 2px 1px ${shHover1}, 2px 4px 4px ${shHover2};
    padding: 4px 6px 4px 4px;    

    &:hover{
        background-color: ${hoverBtn};
    };

    &:active{
        background-color: ${activeBtn};
        box-shadow: inset -2px -2px 2px ${shInset1}, inset 2px 2px 2px ${shInset2}, 0 2px 0px ${shActive1}, 2px 2px 2px ${shActive2};
    }
`
