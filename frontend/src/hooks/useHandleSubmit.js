import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function useHandleSubmit(id, user, mutationFn) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (user) => {
      if (id) {
        return mutationFn(id, user);
      }
      return mutationFn(user);
    },
    onSuccess: () => {
      queryClient.invalidateQueries("users");
      navigate("/");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    mutation.mutate(user);
    console.log("User data submitted:", user);
  };

  return {
    handleSubmit,
    mutation,
  };
}

export default useHandleSubmit;
