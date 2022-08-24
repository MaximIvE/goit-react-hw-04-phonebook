import { useContext } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FilterSection,Input } from "./Filter.styled";
import langContext from 'langContext';
import locale from '../../materials/langauges.json';

export default function Filter({handleFilter}){
    const idInputFilter = nanoid();

    const lang= useContext(langContext);
    const content=locale[lang].contacts;

    return <FilterSection>
        <label htmlFor={idInputFilter}>{content.filtrText}</label>
            <Input 
                id={idInputFilter}
                type="text"
                onChange={e=>handleFilter(e.currentTarget.value.trim())}
                placeholder={content.filtrPlaceholder}>
            </Input>
        </FilterSection>
};

Filter.propTypes={
    handleFilter: PropTypes.func.isRequired,
}