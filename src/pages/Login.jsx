import { useState, useEffect } from "react";
import { login } from "../config/firebase";
import { async } from "@firebase/util";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser";
import { Formik } from "formik";
import * as Yup from "yup"


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const { user } = useUserContext()

    useRedirectActiveUser(user, '/dashboard')

    const onSubmit = async ({ email, password }) => {
        try {
            const user = await login({ email, password })
            console.log(user)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <h1>Login</h1>

            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={onSubmit}
            >

                {({ values, handleSubmit, handleChange }) => (


                    <form onSubmit={handleSubmit}>

                        <input type="text"
                            value={values.email}
                            onChange={handleChange}
                            name="email"
                        />
                        <input type="text"
                            value={values.password}
                            onChange={handleChange}
                            name="password"
                        />


                        <button type="submit">Login</button>
                    </form>

                )}



            </Formik>


        </>)
};

export default Login;
