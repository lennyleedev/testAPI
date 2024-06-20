import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { lennyCreateUser } from './apiService'; // Import the johnCreateUser function

function App() {
  const [formData, setFormData] = useState({
    username: '',
    emailAddress: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    lennyCreateUser(formData);
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
              defaultValue={formData.username}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Email Address:
            <input
              type="email"
              name="email_address"
              defaultValue={formData.emailAddress}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
