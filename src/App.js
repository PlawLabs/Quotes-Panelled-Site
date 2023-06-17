import React, { useState } from 'react';
import './App.css';
import LoginForm from '../LoginForm';
import AdminPanel from '../components/AdminPanel';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <header>
        <h1>Ali Sadi Işık Quotes</h1>
        {isLoggedIn ? (
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        ) : null}
      </header>
      <main>
        {isLoggedIn ? (
          <AdminPanel onLogout={handleLogout} />
        ) : (
          <LoginForm onLogin={handleLogin} />
        )}
      </main>
    </div>
  );
};

export default App;
