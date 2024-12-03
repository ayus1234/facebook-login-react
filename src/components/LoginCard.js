import React from 'react';

const LoginCard = ({ image, username, isAddAccount, onRemove }) => {
  return (
    <div className="login-card">
      <button className="cancel" aria-label={`Remove ${isAddAccount ? 'add account option' : 'account'}`} onClick={onRemove}>
        ×
      </button>
      <img 
        src={image} 
        alt={isAddAccount ? "Add new account" : `Profile picture of ${username}`} 
        className="card-img"
      />
      <div className={`username ${isAddAccount ? 'add-account' : ''}`}>
        {username}
      </div>
    </div>
  );
};

export default LoginCard;
