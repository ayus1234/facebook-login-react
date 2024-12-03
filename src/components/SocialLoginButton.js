import React, { useState } from 'react';

const SocialLoginButton = ({ provider, icon, onClick }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await onClick();
    setIsLoading(false);
  };

  return (
    <button 
      type="button" 
      className={`social-login-button ${provider.toLowerCase()}`}
      data-provider={provider}
      onClick={handleClick}
      disabled={isLoading}
    >
      {icon}
      <span className="social-button-text">Continue with {provider}</span>
      <span className="spinner"></span>
    </button>
  );
};

export default SocialLoginButton;
