import { useState } from "react";
import { register } from "../config/firebase";
import { async } from "@firebase/util";
import { useUserContext } from "../context/UserContext";
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser";


const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { user } = useUserContext()

    useRedirectActiveUser(user, '/dashboard')


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const user = await register({ email, password })
            console.log(user)
        } catch (error) {
            console.log(error)
        }


    }






    return (
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>

                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />


                <button type="submit">Register</button>
            </form>
        </>)
};

export default Register;
