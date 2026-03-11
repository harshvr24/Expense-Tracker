import React from 'react';

const Balance = ({ total }) => {
  const isPositive = total >= 0;

  return (
    <div className="balance-card">
      <p className="balance-label">YOUR BALANCE</p>
      <h2 className={`balance-amount ${isPositive ? 'positive' : 'negative'}`}>
        {isPositive ? '+' : '-'}${Math.abs(total).toFixed(2)}
      </h2>
    </div>
  );
};

export default Balance;
