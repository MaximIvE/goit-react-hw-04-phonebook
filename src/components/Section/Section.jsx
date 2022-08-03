import { Header, Wrapper } from './Section.styled';
import PropTypes from 'prop-types';


export default function Section({children}){
    return(
        <Wrapper>
            <Header>{children[0]}</Header>
            {children[1]}
            {children[2]}
        </Wrapper>
    )
}

Section.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
}