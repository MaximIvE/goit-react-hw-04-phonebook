import { Wrapper } from './Settings.styled';
import Langauge from '../Langauge/Langauge';
import Background from '../Background/Background';

export default function Settings(props){

    return(
        <Wrapper>
            <Langauge {...props}/>
            <Background/>
        </Wrapper>
    )
}