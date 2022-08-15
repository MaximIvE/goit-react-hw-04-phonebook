import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FilterSection,Input } from "./Filter.styled";

export default function Filter({handleFilter}){
    const idInputFilter = nanoid();

    return <FilterSection>
        <label htmlFor={idInputFilter}>Find contacts by name</label>
            <Input 
                id={idInputFilter}
                type="text"
                onChange={e=>handleFilter(e.currentTarget.value.trim())}
                placeholder='Name'>
            </Input>
        </FilterSection>
};

Filter.propTypes={
    handleFilter: PropTypes.func.isRequired,
}