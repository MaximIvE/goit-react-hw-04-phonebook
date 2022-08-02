import { Header } from './Section.styled';

export default function Section({children}){
    if (!children[1]) {return <p>No information.</p>}
    return(

        <div>
            <Header>{children[0]}</Header>
            {children[1]}
        </div>

    )
}