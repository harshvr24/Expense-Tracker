import React from 'react';
import Transaction from './Transaction';

const TransactionList = ({ transactions, loading, onDelete }) => {
  if (loading) {
    return (
      <div className="transaction-section">
        <h3 className="section-title">History</h3>
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading transactions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="transaction-section">
      <h3 className="section-title">
        History
        <span className="transaction-count">{transactions.length}</span>
      </h3>
      {transactions.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">📋</span>
          <p>No transactions yet.</p>
          <p className="empty-sub">Add your first transaction below!</p>
        </div>
      ) : (
        <ul className="list">
          {transactions.map(transaction => (
            <Transaction
              key={transaction._id}
              transaction={transaction}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionList;
