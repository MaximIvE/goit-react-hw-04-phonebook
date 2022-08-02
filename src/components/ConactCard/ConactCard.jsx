import { Card, Text, Button } from "./ConactCard .styled";

export default function ConactCard({name, number}){
    return (<Card>
        <Text>{name}</Text>
        <Text>{number}</Text>
        <Button type='button'>Delete</Button>
    </Card>)
}