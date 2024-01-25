import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { johnCreateUser } from './apiService'; // Import the johnCreateUser function

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
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
    johnCreateUser(formData);
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
            Full Name:
            <input
              type="text"
              name="full_name"
              defaultValue={formData.fullName}
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
