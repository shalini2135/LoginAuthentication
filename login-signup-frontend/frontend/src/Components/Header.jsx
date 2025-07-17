// src/components/Header.jsx
import React from 'react';
import { FaUserFriends } from "react-icons/fa"; // 👥 icon

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <FaUserFriends size={32} color="#007bff" style={styles.icon} />
        <div>
          <h1 style={styles.title}>CampusConnect</h1>
          <p style={styles.subtitle}>University Management Portal</p>
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#ffffff',
    padding: '10px 20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '15px',
  },
  title: {
    margin: 0,
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    margin: 0,
    fontSize: '14px',
    color: '#666',
  },
};

export default Header;
