import { useDispatch } from "react-redux";
import { filterContactsByName } from "../redux/slices";

export const Filter = () => {
    const dispatch = useDispatch();
    const handleFilter = (e) => {
        dispatch(filterContactsByName(e.currentTarget.value));
    };
    // const vidibleContacts =  contacts.filter((contact, e )=>{
    //     const filterText = e.currentTarget.value;
    //     return contact.name.toLowerCase().includes(filterText);
    // })
    return (
        <label>
            Find contacts by name
            <input onChange={handleFilter} type="text" />
        </label>
    )
}