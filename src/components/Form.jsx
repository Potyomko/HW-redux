import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/slices";

export const Form = () => {
    const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(addContact({
        id: nanoid(),
        name: form.elements.name.value,
        number: form.elements.number.value,
    }));
    form.reset();
  };
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
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