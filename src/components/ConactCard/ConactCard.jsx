import { Card, Name, Phone, Button } from "./ConactCard .styled";

export default function ConactCard({name, number, removeCard}){
    return (<Card name={name} id={name + number}>
        <Name>{name}</Name>
        <Phone>{number}</Phone>
        <Button type='button' onClick={removeCard} name={name + number}>Delete</Button>
    </Card>)
}