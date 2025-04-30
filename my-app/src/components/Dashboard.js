import React from 'react';
import { useAuth } from './contexts/AuthContext';

export default function Dashboard() {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      alert('Logged out successfully!');
    } catch {
      alert('Failed to log out');
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {currentUser ? (
        <>
          <p>Welcome, {currentUser.email}!</p>
          <button onClick={handleLogout}>Log Out</button>
        </>
      ) : (
        <p>Please log in or sign up.</p>
      )}
    </div>
  );
}
