import { memo, useContext} from 'react';
import PropTypes from 'prop-types';
import { Card, Name, Phone, ButtonCard } from "./ConactCard .styled";
import langContext from 'langContext';
import locale from '../../materials/langauges.json';


function ConactCard({name, number, removeCard}){

    const lang = useContext(langContext);
    const content = locale[lang].contacts;

    return (<Card name={name} id={name}>
        <Name>{name}</Name>
        <Phone>{number}</Phone>
        <ButtonCard type='button' onClick={removeCard} name={name}>{content.buttonText}</ButtonCard>
    </Card>)
}

export default memo(ConactCard);

ConactCard.propTypes={
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    removeCard: PropTypes.func.isRequired,
}