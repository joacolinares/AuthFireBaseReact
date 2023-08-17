
import { logout } from "../config/firebase";
import { useUserContext } from "../context/UserContext";

const Dashboard = () => {



    const handleLogout = async () => {
        try {
            await logout()
        } catch (error) {
            console.log(error)
        }
    }


    return <>
        DASHBOARD (RUTA PROTEGIDA)
        <button onClick={handleLogout} >LOGOUT</button>

    </>;
};

export default Dashboard;
