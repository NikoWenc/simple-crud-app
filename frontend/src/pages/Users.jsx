import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/userAPI";
import { useNavigate } from "react-router-dom";
import useHandleDelete from "../utils/useHandleDelete";

const Users = () => {
  const navigate = useNavigate();
  const { handleDelete } = useHandleDelete();

  const {
    data: users,
    isLoading,
    error,
  } = useQuery({ queryKey: ["users"], queryFn: getUsers });

  if (isLoading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>Error fetching users: {error.message}</div>;
  }

  return (
    <main className="max-w-7xl mx-auto px-8 md:px-24 pt-24 pb-32 font-body">
      {/* Header Section */}
      <header className="flex justify-between items-end mb-16">
        <div>
          <span className="label-sm text-on-surface-variant block mb-2">
            Management
          </span>
          <h1 className="text-[1.5rem] font-bold tracking-[-0.01em] text-on-surface">
            User Directory
          </h1>
        </div>
        <button
          className="bg-tertiary text-on-tertiary px-6 py-2.5 rounded-md text-sm font-medium hover:opacity-90 active:scale-[0.98] transition-all duration-150 flex items-center gap-2"
          onClick={() => navigate("/addUser")}
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          Add User
        </button>
      </header>

      {/* User List Table Section */}
      <div className="bg-surface-container-lowest rounded-xl overflow-hidden ghost-border">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low/50">
              <th className="px-8 py-5 text-[0.6875rem] font-bold tracking-[0.05em] uppercase text-on-surface-variant">
                Name
              </th>
              <th className="px-8 py-5 text-[0.6875rem] font-bold tracking-[0.05em] uppercase text-on-surface-variant">
                Email
              </th>
              <th className="px-8 py-5 text-[0.6875rem] font-bold tracking-[0.05em] uppercase text-on-surface-variant">
                Address
              </th>
              <th className="px-8 py-5 text-[0.6875rem] font-bold tracking-[0.05em] uppercase text-on-surface-variant text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/10">
            {users?.map((user) => (
              <tr
                key={user._id}
                className="hover:bg-surface-container-low transition-colors duration-200"
              >
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden flex items-center justify-center text-on-surface-variant">
                      <span className="material-symbols-outlined">person</span>
                    </div>
                    <span className="text-[0.875rem] font-semibold text-on-surface">
                      {user.username}
                    </span>
                  </div>
                </td>
                <td className="px-8 py-6 text-[0.875rem] text-on-surface-variant">
                  {user.email}
                </td>
                <td className="px-8 py-6 text-[0.875rem] text-on-surface-variant">
                  {user.address}
                </td>
                <td className="px-8 py-6 text-right">
                  <div className="flex justify-end gap-4">
                    <button
                      className="text-tertiary text-[0.875rem] font-medium hover:underline transition-all"
                      onClick={() => navigate(`/editUser/${user._id}`)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-error text-[0.875rem] font-medium hover:opacity-70 transition-all"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination / Footer */}
        <div className="px-8 py-5 flex items-center justify-between border-t border-outline-variant/5 bg-surface-container-lowest">
          <span className="text-[0.6875rem] font-medium tracking-[0.05em] uppercase text-on-surface-variant">
            Showing 2 of 48 Users
          </span>
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded bg-surface-container-low text-on-surface hover:bg-surface-container-highest transition-all">
              <span className="material-symbols-outlined text-[18px]">
                chevron_left
              </span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-surface-container-low text-on-surface hover:bg-surface-container-highest transition-all">
              <span className="material-symbols-outlined text-[18px]">
                chevron_right
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Users;
