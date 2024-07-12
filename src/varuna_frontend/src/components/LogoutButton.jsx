import React from 'react';
import { useConnect } from '@connect2ic/react';
import '@connect2ic/core/style.css';

const LogoutButton = ({ onLogout }) => {
  const { disconnect } = useConnect();

  const handleLogout = () => {
    disconnect();
    onLogout();
  };

  return (
    <button
      className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
      onClick={handleLogout}
      aria-label="Logout"
    >
      Logout
    </button>
  );
};

export default LogoutButton;


