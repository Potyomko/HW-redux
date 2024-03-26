import { useDispatch } from "react-redux";
import { filterContactsByName } from "../redux/contacts/slices";

export const Filter = () => {
    const dispatch = useDispatch();
    // const handleFilterChange = (e) => {
    //     dispatch(filterContactsByName(e.currentTarget.value))
    // };
    
    return (
        <label>
            Find contacts by name
            <input onChange={e=>dispatch(filterContactsByName(e.currentTarget.value))} type="text" />
        </label>
    )
}