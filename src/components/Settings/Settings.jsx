import { Wrapper } from './Settings.styled';
import Langauge from '../Langauge/Langauge';

export default function Settings(props){

    return(
        <Wrapper>
            <Langauge
                {...props}
            />
        </Wrapper>
    )
}