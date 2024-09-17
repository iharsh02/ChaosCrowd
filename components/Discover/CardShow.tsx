import { useState, useEffect } from "react";
import fetchUserById  from "@/lib/fetchUser"; // Import the server action

const UserFetch = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserById("cm163a07j00034mgc3k6x0yej"); // Fetch user data from server
        setUserData(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>User Data</h2>
      <pre className="text-black">{JSON.stringify(userData, null, 2)}</pre>
    </div>
  );
};

export default UserFetch;


