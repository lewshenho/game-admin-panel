import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Perform authentication logic here
    // You can compare entered username and password with predefined values
    const isValidUser = username === 'admin' && password === 'adminqwerty';

    if (isValidUser) {
      onLogin(); // Call the onLogin function passed as a prop
    } else {
      // Handle invalid login
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <label>Username:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <br/><br/>
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br/><br/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
