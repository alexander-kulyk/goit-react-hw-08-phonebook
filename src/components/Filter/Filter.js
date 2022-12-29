import PropTypes  from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { handleFindContact } from "redux/filterContactsSlice"
import { FilterIntput, FilterTitle } from "./Filter.styled"



export const Filter = ({title}) =>{
    
    const dispatch = useDispatch();
    const query = useSelector(state => state.filter.filter);

    return(
        <>
            <FilterTitle>{title}</FilterTitle>
            <FilterIntput
                type="text"
                name="filter"
                value={query}
                onChange = {e => dispatch(handleFindContact(e.target.value))}
            />
        </>

    )
}

Filter.propTypes = {
    title: PropTypes.string.isRequired,
}


