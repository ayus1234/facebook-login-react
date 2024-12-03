import React, { useState } from 'react';
import './App.css';
import facebookLogo from './images/2021_Facebook_icon.svg.png';
import myImage from './images/my_image.png';
import plusIcon from './images/plus.png';
import googleLogo from './images/google-logo.svg';
import appleLogo from './images/apple-logo.svg';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const handleSocialLogin = (provider) => {
    setIsLoading(true);
    // Simulate social login
    setTimeout(() => {
      setIsLoading(false);
      console.log(`${provider} login clicked`);
    }, 1500);
  };

  return (
    <div id="container">
      <div id="recent-logins">
        <img src={facebookLogo} alt="Facebook" className="facebook-logo" />
        <h2 id="title">Recent logins</h2>
        <p id="subtitle">Click your picture or add an account</p>
        
        <div className="card-container">
          <div className="login-card">
            <img src={myImage} alt="User Profile" />
            <div className="name">Ayush Nathani</div>
          </div>
          <div className="add-account">
            <div className="plus-icon">
              <div className="plus-icon-circle">
                <img src={plusIcon} alt="Add Account" />
              </div>
            </div>
            <span>Add Account</span>
          </div>
        </div>
      </div>

      <div className="login-form">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email or Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login-button" type="submit" disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Log in'}
            </button>
            <a href="#" className="forgot-password">Forgot password?</a>
            <div className="divider"></div>
            <button type="button" className="create-account">
              Create New Account
            </button>
          </form>
        </div>

        <div className="social-login">
          <p className="social-text">or continue with</p>
          <div className="social-buttons">
            <button onClick={() => handleSocialLogin('Google')} className="social-button google-login">
              <img src={googleLogo} alt="Google" />
              Continue with Google
            </button>
            <button onClick={() => handleSocialLogin('Apple')} className="social-button apple-login">
              <img src={appleLogo} alt="Apple" />
              Continue with Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
