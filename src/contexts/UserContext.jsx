import { createContext, useContext, useEffect, useState } from "react";
import { useLocation  } from "react-router-dom";
import PropTypes from "prop-types";

const UserContext = createContext();

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a <UserProvider>');
    }
    return context;
}

export const UserProvider = ({ children }) => {
    const [userData, setuserData] = useState(null);
    const location = useLocation();
    
    useEffect(() => {
        // Extract the userId/username from the URL path
        const pathParts = location.pathname.split('/');
        // const username = pathParts[2];
        const username = true;
        console.log("location: ", pathParts)

        async function fetchData() {
            try {
                console.log("start fetching")
                // const res = await fetch(`http://localhost:5000/api/user/${username}`);
                const res = await fetch('../../data.json');
                if (!res.ok) throw new Error('Failed to fetch user');
                const data = await res.json();
                console.log("new data", data);
                setuserData(data);
            } catch (err) {
                console.error(err);
            }
            
            UserProvider.propTypes = {
                children: PropTypes.node.isRequired,
            };
        }

        if (username) {
            fetchData();
        }
    }, [location.pathname]);

    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    );
}