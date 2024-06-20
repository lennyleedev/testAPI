import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { lennyCreateUser } from './apiService'; // Import the lennyCreateUser function

function App() {
  const [formData, setFormData] = useState({
    username: '',
    emailAddress: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await lennyCreateUser(formData);
      setResponseMessage('User creation successful!');
      console.log('Response:', response);
    } catch (error) {
      setResponseMessage('Failed to create user.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Enter some example details.
        </p>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Email Address:
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
      </header>
    </div>
  );
}

export default App;