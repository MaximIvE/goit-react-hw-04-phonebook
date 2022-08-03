import PropTypes from 'prop-types';
import { Card, Name, Phone } from "./ConactCard .styled";


export default function ConactCard({name, number, removeCard}){
    return (<Card name={name} id={name + number}>
        <Name>{name}</Name>
        <Phone>{number}</Phone>
        <button type='button' onClick={removeCard} name={name + number}>Delete</button>
    </Card>)
}

ConactCard.propTypes={
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    removeCard: PropTypes.func.isRequired,
}