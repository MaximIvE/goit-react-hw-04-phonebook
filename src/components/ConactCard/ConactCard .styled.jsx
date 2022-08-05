import styled from 'styled-components';
import { Button } from '../../styles/placeholders.styled'

export const Card = styled.li`
    display: flex;
    padding: 4px;
    align-items: center;
    height: 24px;
    margin: 0;
    border-bottom:  rgba(0,0,0,0.1) 1px solid;
`;

export const Name = styled.p`
margin-right: 8px;
width: 40%;
`;

export const Phone = styled.p`
margin-right: 8px;
width: 50%;
`;

export const ButtonCard = styled(Button)`
padding: 4px 6px 4px 4px; 
`;