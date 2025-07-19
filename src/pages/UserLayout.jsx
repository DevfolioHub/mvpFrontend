// pages/UserLayout.jsx
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { UserProvider } from '../contexts/UserContext';

const RESERVED_USERNAMES = ['about', 'works', 'contact', 'api', 'admin'];

const UserLayout = () => {
  // const { username } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const location = useLocation();
  const match = location.pathname.match(/^\/([^/]+)(?:\/([^/]+))?/);
  const username = match?.[1];

  console.log("match: ", match);
  console.log("username: ", username);

  
  
  useEffect(() => {
    // Filter invalid usernames manually inside UserLayout, then redirect to PageNotFound
    // Only run RESERVED_USERNAMES check if a subroute exists (i.e. username context)
    if (match?.[2]) {
      if (!username || RESERVED_USERNAMES.includes(username.toLowerCase())) {
        setNotFound(true);
        setLoading(false);
        return;
      }
    }

    // fetch Basic user profile
    const fetchUser = async () => {
      try {
        // const res = await fetch(`http://localhost:5000/api/user/${username || "manny"}`);
        const res = await fetch('../../data.json');
        if (!res.ok) throw new Error();
        const data = await res.json();
        console.log("data: ", data);
        setUser(data);
      } catch (e) {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [username, match]);

  if (loading) return <p>Loading user...</p>;
  if (notFound) return <Navigate to="/not-found" />;

  return (
    <UserProvider user={user}>
      <Outlet />
    </UserProvider>
  );
};

export default UserLayout;
