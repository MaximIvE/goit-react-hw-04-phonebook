import { Component } from "react";
import {List} from './Contacts.styled';
import ConactCard from "components/ConactCard/ConactCard";




export default class Contacts extends Component{
    state={
        contacts: this.props.contacts,
    }

    getCardMarking(){
        return (this.state.contacts.map( (user) =>
                <ConactCard 
            name = {user.name}
            number = {user.number}/>
            )
            );
        
    }
    


    render(){
        return (
            <List>
                {this.getCardMarking()}
                
            </List>
        )
    }
}