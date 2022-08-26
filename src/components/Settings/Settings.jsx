import { Wrapper } from './Settings.styled';
import Langauge from '../Langauge/Langauge';
import Background from '../Background/Background';

export default function Settings({langauge, changeLangauge, changeBackground}){
    
    const lang = {langauge, changeLangauge};
    const bg = {changeBackground}
    
    return(
        <Wrapper>
            <Langauge {...lang}/>
            <Background {...bg}/>
        </Wrapper>
    )
}