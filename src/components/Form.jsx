import { useDispatch } from "react-redux";
import { addContacts } from "../redux/operetions";

export const Form = () => {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
      e.preventDefault();
      const name = e.currentTarget.elements.name.value;
      const number = e.currentTarget.elements.number.value;
      const newContact = { name, number };
      dispatch(addContacts(newContact));
      e.currentTarget.reset();
  };
    return (
        <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    )
}