import { Header, Wrapper } from './Section.styled';

export default function Section({children}){
    return(
        <Wrapper>
            <Header>{children[0]}</Header>
            {children[1]}
            {children[2]}
        </Wrapper>
    )
}