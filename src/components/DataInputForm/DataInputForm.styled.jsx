import styled from 'styled-components';
import { Button } from '../../styles/placeholders.styled';

export const DataInput = styled.form`
    display: flex;
    flex-direction: column;
    padding: 4px;
    text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em black;
`;

export const ButtonForm = styled(Button)`
margin-top: 8px;
width: 90px;
margin-left: auto;
margin-right: auto;
`;
