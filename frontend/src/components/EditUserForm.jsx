import { useParams, useNavigate } from "react-router-dom";
import useHandleSubmit from "../hooks/useHandleSubmit";
import { editUser } from "../api/userAPI";
import useFetchUser from "../hooks/useFetchUser";

function EditUserForm() {
  const { id } = useParams();
  const { user, setUser, error } = useFetchUser(id);
  const { handleSubmit, mutation } = useHandleSubmit(id, user, editUser);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (mutation.isPending) {
    return <div>Updating user...</div>;
  }

  if (error) {
    return <div>Error updating user: {error.message}</div>;
  }

  return (
    <div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_12px_40px_rgba(45,52,53,0.04)]">
      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label
            className="block text-[0.6875rem] font-bold tracking-[0.05em] uppercase text-on-surface-variant"
            htmlFor="username"
          >
            Username:
          </label>
          <div className="relative">
            <input
              className="w-full px-0 py-3 bg-transparent border-0 border-b border-outline-variant/15 focus:border-tertiary focus:ring-0 text-[0.875rem] text-on-surface placeholder:text-outline-variant/40 transition-all"
              type="text"
              id="username"
              name="username"
              value={user.username}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label
            className="block text-[0.6875rem] font-bold tracking-[0.05em] uppercase text-on-surface-variant"
            htmlFor="email"
          >
            Email:
          </label>
          <div className="relative">
            <input
              className="w-full px-0 py-3 bg-transparent border-0 border-b border-outline-variant/15 focus:border-tertiary focus:ring-0 text-[0.875rem] text-on-surface placeholder:text-outline-variant/40 transition-all"
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="space-y-2">
          <label
            className="block text-[0.6875rem] font-bold tracking-[0.05em] uppercase text-on-surface-variant"
            htmlFor="address"
          >
            Address
          </label>
          <div className="relative">
            <textarea
              className="w-full px-0 py-3 bg-transparent border-0 border-b border-outline-variant/15 focus:border-tertiary focus:ring-0 text-[0.875rem] text-on-surface placeholder:text-outline-variant/40 transition-all resize-none"
              id="address"
              name="address"
              rows="3"
              required
              value={user.address}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>

        {/* Actions Row */}
        <div className="pt-8 flex items-center justify-end gap-6">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-on-surface-variant hover:text-on-surface transition-colors duration-200 text-sm font-medium"
          >
            Cancel
          </button>
          <button
            className="bg-tertiary text-on-tertiary px-8 py-3 rounded-md font-semibold text-sm hover:opacity-90 active:scale-[0.98] transition-all duration-200 shadow-sm disabled:opacity-50"
            type="submit"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Updating..." : "Update User"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditUserForm;
