import React, { useState } from 'react';
import './Auth.css';

function Auth() {
  // Which tab is active - login or signup
  const [activeTab, setActiveTab] = useState('login');
  
  // Form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  // System info - object with data
  const system = {
    name: 'VERIPTA',
    description: 'PTA Payment Verification System',
    campus: 'USTP - CDO Campus'
  };

  // Features list - array of strings
  const features = [
    'Secure Payment Verification',
    'Real-time Transaction Monitoring',
    'Automated Receipt Processing',
  ];

  // Handle form submit
  function handleSubmit(e) {
    e.preventDefault();
    if (activeTab === 'login') {
      alert('Login: ' + username);
    } else {
      alert('Sign Up: ' + fullName);
    }
  }

  return (
    <div className="page">
      {/* LEFT SIDE - Blue background with info */}
      <div className="left">
        <div className="tag">SECURE • VERIFIED • TRUSTED</div>
        
        <h1>{system.name}</h1>
        <p className="desc">{system.description}</p>
        
        <div className="list">
          <h3>SYSTEM FEATURES</h3>
          {features.map((item, i) => (
            <div key={i} className="item">
              <span className="check">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE - White background with form */}
      <div className="right">
        <div className="box">
          {/* Blue header */}
          <div className="header">
            <h2>{system.name}</h2>
            <p>{system.description}</p>
            <p>{system.campus}</p>
          </div>

          {/* Login/Signup tabs */}
          <div className="tabs">
            <button 
              className={activeTab === 'login' ? 'active' : ''}
              onClick={() => setActiveTab('login')}
            >
              Login
            </button>
            <button 
              className={activeTab === 'signup' ? 'active' : ''}
              onClick={() => setActiveTab('signup')}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {activeTab === 'signup' && (
              <div className="group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
            )}

            <div className="group">
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            {activeTab === 'signup' && (
              <div className="group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            )}

            <div className="group">
              <label>Password</label>
              <input
                type="password"
                placeholder={activeTab === 'login' ? 'Enter password' : 'Create password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn">
              {activeTab === 'login' ? 'Login' : 'Sign Up'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth;
