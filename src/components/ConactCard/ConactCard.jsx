import { Card, Name, Phone, Button } from "./ConactCard .styled";

export default function ConactCard({name, number}){
    return (<Card>
        <Name>{name}</Name>
        <Phone>{number}</Phone>
        <Button type='button'>Delete</Button>
    </Card>)
}