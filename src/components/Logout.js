import React from 'react';

const Logout = ({ setToken }) => {
  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <button onClick={handleLogout} className="btn btn-danger">
      Logout
    </button>
  );
};

export default Logout;
