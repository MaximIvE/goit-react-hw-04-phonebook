import PropTypes from 'prop-types';
import { Card, Name, Phone, ButtonCard } from "./ConactCard .styled";


export default function ConactCard({name, number, removeCard}){
    return (<Card name={name} id={name}>
        <Name>{name}</Name>
        <Phone>{number}</Phone>
        <ButtonCard type='button' onClick={removeCard} name={name}>Delete</ButtonCard>
    </Card>)
}

ConactCard.propTypes={
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    removeCard: PropTypes.func.isRequired,
}