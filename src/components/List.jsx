import { useDispatch, useSelector } from "react-redux";
import { deleteContacts, fetchContacts } from "../redux/operetions";
import { visibleContacts } from "../redux/selectors";
import { useEffect } from "react";

export const List = ({contact}) => {
    const dispatch = useDispatch();
      const handleDelete = (contactId) => {
        dispatch(deleteContacts(contactId));
  };
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
                        <button type="button" onClick={() => handleDelete(id)}>
                            Delete
                        </button>
                    </li>
                );
            })}
        </ul>
    )
}