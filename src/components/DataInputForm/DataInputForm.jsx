import { useState, memo, useContext} from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import langContext from 'langContext';
import locale from '../../materials/langauges.json';

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
        
        // "header": "Книга контактів",
        // "name": "Ім'я",
        // "number": "Номер",
        // "buttonText": "Д

        const lang = useContext(langContext);
        const content= locale[lang].phonebook;

        return (
            <DataInput onSubmit={handleSubmit}>
                <label htmlFor={idInputName}>{content.name}</label>
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
                
                <label htmlFor={idInputNumber}>{content.number}</label>
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
                    >{content.buttonText}
                </ButtonForm>
            </DataInput>
        );
};

export default memo(DataInputForm);

DataInputForm.propTypes={
    addContact: PropTypes.func.isRequired,
}
