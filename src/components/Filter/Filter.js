import { useDispatch, useSelector } from "react-redux"
import { handleFindContact } from "redux/contacts/filterContactsSlice";
import { FilterIntput } from "./Filter.styled"



export const Filter = () =>{
    
    const dispatch = useDispatch();
    const query = useSelector(state => state.filter.filter);

    return(
        <>
            <FilterIntput
                type="text"
                name="filter"
                placeholder="Find contacs by name"
                value={query}
                onChange = {e => dispatch(handleFindContact(e.target.value))}
            />
        </>

    )
}




