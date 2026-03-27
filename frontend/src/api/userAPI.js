import axios from "axios";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const getUsers = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

const getUsersByName = async (username) => {
  try {
    const response = await axios.get(`${SERVER_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

const addUser = async (userData) => {
  try {
    const response = await axios.post(`${SERVER_URL}/addUser`, userData);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const response = await axios.get(`${SERVER_URL}/user/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error;
  }
};

const editUser = async (id, userData) => {
  try {
    const response = await axios.put(
      `${SERVER_URL}/editUser/user/${id}`,
      userData,
    );
    return response.data;
  } catch (error) {
    console.error("Error editing user:", error);
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${SERVER_URL}/deleteUser/user/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};

export { getUsers, getUsersByName, addUser, getUserById, editUser, deleteUser };
