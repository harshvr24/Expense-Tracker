import React from 'react';

const Transaction = ({ transaction, onDelete }) => {
  const { _id, text, amount, createdAt } = transaction;
  const isIncome = amount > 0;

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <li className={`transaction-item ${isIncome ? 'income' : 'expense'}`}>
      <div className="transaction-indicator"></div>
      <div className="transaction-info">
        <span className="transaction-text">{text}</span>
        <span className="transaction-date">{formatDate(createdAt)}</span>
      </div>
      <div className="transaction-right">
        <span className={`transaction-amount ${isIncome ? 'income-text' : 'expense-text'}`}>
          {isIncome ? '+' : '-'}${Math.abs(amount).toFixed(2)}
        </span>
        <button
          className="delete-btn"
          onClick={() => onDelete(_id)}
          title="Delete transaction"
        >
          ✕
        </button>
      </div>
    </li>
  );
};

export default Transaction;
