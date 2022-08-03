import { Header } from './Section.styled';

export default function Section({children}){
    return(

        <div>
            <Header>{children[0]}</Header>
            {children[1]}
            {children[2]}
        </div>

    )
}