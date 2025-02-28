import React, { useContext } from "react";
import { AuthContext } from "./authContext";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Welcome</h2>
        <p className="text-center mb-4">Logged in as: <strong>{user?.email || user?.phone}</strong></p>
        <button onClick={logout} className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">Logout</button>
      </div>
    </div>
  );};

export default Dashboard;
