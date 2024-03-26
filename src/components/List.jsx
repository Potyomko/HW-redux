import { useDispatch, useSelector } from "react-redux";
import { deleteContacts, fetchContacts } from "../redux/contacts/operetions";
import { visibleContacts } from "../redux/contacts/selectors";
import { useEffect } from "react";

export const List = ({contact}) => {
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(fetchContacts())
    }, [dispatch])
    const contacts = useSelector(visibleContacts)
    return (
        <ul>
            {contacts.map(({ id, name, number }) => {
                return (
                    <li key={id}>
                        <p>
                            {name}: {number}
                        </p>
                        <button type="button" onClick={() => dispatch(deleteContacts(id))}>
                            Delete
                        </button>
                    </li>
                );
            })}
        </ul>
    )
}