import { useDispatch } from "react-redux";
import { register } from "../redux/auth/operations";

export const RegisterForm = () => {
    const dispath = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        dispath(register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
        }))
        form.reset()
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input type="text" name="name"/>
            </label>
            <label>
                Email
                <input type="email" name="email" />
            </label>
            <label>
                Password
                <input type="password" name="password"/>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}