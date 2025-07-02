import { createContext, useContext, useEffect, useState } from "react";
import { useLocation  } from "react-router-dom";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children, param }) => {
    const [userData, setuserData] = useState(null);
    const location = useLocation();

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`http://localhost:5000/api/user/${param}`);
            const data = await res.json();
            setuserData(data);
        }
        fetchData();
    }, [param]);

    return (
        <UserContext.Provider value={{ userData, setuserData }}>
            {children}
        </UserContext.Provider>
    );
}