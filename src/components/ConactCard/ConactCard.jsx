import { memo } from 'react';
import PropTypes from 'prop-types';
import { Card, Name, Phone, ButtonCard } from "./ConactCard .styled";


function ConactCard({name, number, removeCard}){
    return (<Card name={name} id={name}>
        <Name>{name}</Name>
        <Phone>{number}</Phone>
        <ButtonCard type='button' onClick={removeCard} name={name}>Delete</ButtonCard>
    </Card>)
}

export default memo(ConactCard);

ConactCard.propTypes={
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    removeCard: PropTypes.func.isRequired,
}