// pages/UserLayout.jsx
import { useParams, Outlet, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { UserProvider } from '../contexts/UserContext';

const UserLayout = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // const res = await fetch(`http://localhost:5000/api/user/${username}`);
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
  }, [username]);

  if (loading) return <p>Loading user...</p>;
  if (notFound) return <Navigate to="/not-found" />;

  return (
    <UserProvider user={user}>
      <Outlet />
    </UserProvider>
  );
};

export default UserLayout;
