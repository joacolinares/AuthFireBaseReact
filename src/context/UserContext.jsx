import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { auth } from "../config/firebase";

const UserContext = createContext();

export default function UserContextProvider({ children }) {
    const [user, setUser] = useState(false);




    useEffect(() => {

        const unsuscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            console.log(user)
        })
        return unsuscribe
    }, []);



    if (user === false) return <p>Cargando...</p>



    return (
        <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
    );
}

export const useUserContext = () => useContext(UserContext);
