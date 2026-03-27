import { deleteUser } from "../api/userAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useHandleDelete() {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteMutation.mutate(id);
    }
  };

  return { handleDelete };
}

// is this the correct way to export a custom hook? I want to use this in the Users.jsx page to handle user deletion without having to write the mutation logic there.
