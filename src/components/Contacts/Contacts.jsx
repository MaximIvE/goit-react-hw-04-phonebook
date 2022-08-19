import {useMemo} from 'react';
import {List} from './Contacts.styled';
import ConactCard from "components/ConactCard/ConactCard";
import PropTypes from 'prop-types';


export default function Contacts({removeConactApp, contacts}){
    
    const getCardMarking = useMemo(() => {
       
        return (contacts.map( (user) =>
                <ConactCard 
            key={user.name}
            name = {user.name}
            number = {user.number}
            removeCard={(e)=>removeConactApp(e.currentTarget.name)}/>
            )
        );
    },[removeConactApp, contacts]);
    
    return (
        <List>
            {getCardMarking}
        </List>
    )
};

Contacts.propTypes={
    removeConactApp: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string).isRequired,
    )
}