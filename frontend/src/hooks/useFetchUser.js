import React from "react";
import { getUserById } from "../api/userAPI";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

export default function useFetchUser(id) {
  const userData = {
    username: "",
    email: "",
    address: "",
  };

  const [user, setUser] = useState(userData);

  const { data: fetchedUser, error } = useQuery({
    queryKey: ["users", id],
    queryFn: () => getUserById(id),
  });

  useEffect(() => {
    async function fetchUser() {
      try {
        if (fetchedUser) {
          setUser(fetchedUser);
          return;
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    if (id) {
      fetchUser();
    }
  }, [id, fetchedUser]);

  return { user, setUser, error };
}
