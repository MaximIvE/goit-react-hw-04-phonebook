import { Component } from "react";
import {List} from './Contacts.styled';
import ConactCard from "components/ConactCard/ConactCard";




export default class Contacts extends Component{
   

    getCardMarking(){
        return (this.props.contacts.map( (user) =>
                <ConactCard 
            key={user.name}
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