import { useState, memo} from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { DataInput,ButtonForm } from './DataInputForm.styled';


const DataInputForm = ({addContact})=>{
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

        const idInputName = nanoid();
        const idInputNumber = nanoid();

        const handleSubmit = e => {
            e.preventDefault();
            addContact(name, number);
            setName("");
            setNumber("");
        };
        
        return (
            <DataInput onSubmit={handleSubmit}>
                <label htmlFor={idInputName}>Name</label>
                <input
                    name="name"
                    type="text"
                    id={idInputName}
                    value={name}
                    onChange={e=>setName(e.currentTarget.value)}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                
                <label htmlFor={idInputNumber}>Number</label>
                <input
                    name="number"
                    type="tel"
                    id={idInputNumber}
                    value={number}
                    onChange={e=>setNumber(e.currentTarget.value)}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                <ButtonForm 
                    type='submit' 
                    name="contacts" 
                    >Add contact
                </ButtonForm>
            </DataInput>
        );
};

export default memo(DataInputForm);

DataInputForm.propTypes={
    addContact: PropTypes.func.isRequired,
}
