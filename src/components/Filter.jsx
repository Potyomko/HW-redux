import { useDispatch } from "react-redux";
import { filterContactsByName } from "../redux/slice";

export const Filter = () => {
    const dispatch = useDispatch();
    const handleFilter = (e) => {
        dispatch(filterContactsByName(e.currentTarget.value));
    };
    return (
        <label>
            Find contacts by name
            <input onChange={handleFilter} type="text" />
        </label>
    )
}