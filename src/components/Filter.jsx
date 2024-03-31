import { useDispatch, useSelector } from "react-redux";
import { filterContactsByName } from "../redux/contacts/slices";
import { selectFilter } from "../redux/contacts/selectors";

export const Filter = () => {
    const dispatch = useDispatch();
    // const handleFilterChange = (e) => {
    //     dispatch(filterContactsByName(e.currentTarget.value))
    // };
    const filterValue = useSelector(selectFilter)
    console.log(filterValue);
    
    return (
        <label>
            Find contacts by name
            <input onChange={e=>dispatch(filterContactsByName(e.currentTarget.value))} type="text" />
        </label>
    )
}