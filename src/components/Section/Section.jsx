import { Title, Wrapper } from './Section.styled';
import PropTypes from 'prop-types';


export default function Section({children}){
    return(
        <Wrapper>
            <Title>{children[0]}</Title>
            {children[1]}
            {children[2]}
        </Wrapper>
    )
}

Section.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
}