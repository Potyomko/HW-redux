import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../redux/slices";
import { Contacts, Filter } from "../redux/selectors";

export const List = () => {
    const dispatch = useDispatch();
    const filterText = useSelector(Filter)
    const contacts = useSelector(Contacts);
    console.log(contacts);
    const deletePhone = (contactId) => {
        dispatch(deleteContact(contactId));
    };
    const visibleContacts = contacts.filter((contact) => {
        console.log(contact);
        console.log(contact.name.toLowerCase().includes(filterText));
        return  contact.name.toLowerCase().includes(filterText)
    })
    console.log(visibleContacts);
    return (
        <ul>
            {visibleContacts.map(({ id, name, number }) => {
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