import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../redux/slices";
import { Contacts } from "../redux/selectors";

export const List = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(Contacts);
    const deletePhone = (contactId) => {
        dispatch(deleteContact(contactId));
    };
    return (
        <ul>
            {contacts.map(({ id, name, number }) => {
                return (
                    <li key={id}>
                        <p>
                            {name}: {number}
                        </p>
                        <button type="button" onClick={() => deletePhone(id)}>
                            Delete
                        </button>
                    </li>
                );
            })}
        </ul>
    )
}