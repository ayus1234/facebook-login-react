import React, { useState } from 'react';
import SocialLoginButton from './SocialLoginButton';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Login successful');
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log(`${provider} login initiated`);
    } catch (error) {
      setError(`${provider} login failed. Please try again.`);
    }
  };

  return (
    <section id="login">
      <form id="login-form" onSubmit={handleSubmit}>
        {error && <div id="error-message" className="error-message" style={{ opacity: 1, display: 'block' }}>{error}</div>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email or Phone Number"
          required
          aria-label="Email or Phone Number"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          aria-label="Password"
          minLength="6"
        />
        <button type="submit" id="login-button" disabled={isLoading}>
          {isLoading ? <><span className="spinner"></span>Logging in...</> : 'Log in'}
        </button>
        <a href="#" className="forgot-password">Forgot password?</a>
        <hr />
        <button type="button" id="create-new-account">Create New Account</button>
        
        <div className="social-login">
          <p className="social-login-text">or continue with</p>
          <div className="social-buttons">
            <SocialLoginButton
              provider="Google"
              icon={<img src="/images/google-logo.svg" alt="Google logo" className="google-logo" />}
              onClick={() => handleSocialLogin('Google')}
            />
            <SocialLoginButton
              provider="Apple"
              icon={
                <svg className="apple-logo" viewBox="0 0 384 512" width="16" height="16">
                  <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
              }
              onClick={() => handleSocialLogin('Apple')}
            />
          </div>
        </div>
      </form>
      <p className="create-page"><strong>Create a Page</strong> for a celebrity, brand or business</p>
    </section>
  );
};

export default LoginForm;
