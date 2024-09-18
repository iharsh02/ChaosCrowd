"use client";
import { useState, useEffect } from "react";
import { fetchUserData } from "@/lib/fetchUser";
import { Card } from "./card";
import { useSession } from "next-auth/react";

interface Blink {
  id: string;
  label: string;
  username: string | null;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: string;
  userId: string;
}

const UserFetch = () => {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState<Blink[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (status === "authenticated" && session?.user?.id) {
        try {
          const data: Blink[] = await fetchUserData(session.user.id);
          console.log(data)
          setUserData(data);
        } catch (err) {
          const errorMessage =
            err instanceof Error ? err.message : "An unknown error occurred";
          setError(errorMessage);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchData();
  }, [session, status]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="mt-5">
      {userData && userData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userData.map((blink) => (
            <Card
              id={blink.id}
              key={blink.id}
              name={blink.username}
              title={blink.title}
              image={blink.imageUrl}
              description={blink.description}
            />
          ))}
        </div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default UserFetch;
