import React, { useState } from 'react';

const AddTransaction = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!text.trim()) {
      setError('Please enter a description.');
      return;
    }
    if (!amount || isNaN(amount) || Number(amount) === 0) {
      setError('Please enter a valid non-zero amount.');
      return;
    }

    setLoading(true);
    const result = await onAdd({ text: text.trim(), amount: parseFloat(amount) });
    setLoading(false);

    if (result.success) {
      setText('');
      setAmount('');
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    } else {
      setError(result.error || 'Failed to add transaction.');
    }
  };

  return (
    <div className="add-transaction-section">
      <h3 className="section-title">Add New Transaction</h3>
      <form onSubmit={handleSubmit} className="add-form">
        <div className="form-group">
          <label htmlFor="text" className="form-label">Description</label>
          <input
            id="text"
            type="text"
            className="form-input"
            placeholder="e.g. Salary, Rent, Coffee..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={100}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount" className="form-label">
            Amount
            <span className="form-hint">(positive = income, negative = expense)</span>
          </label>
          <input
            id="amount"
            type="number"
            className="form-input"
            placeholder="e.g. 500 or -50"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            step="0.01"
          />
        </div>

        {error && <div className="form-error">{error}</div>}
        {success && <div className="form-success">✓ Transaction added!</div>}

        <button
          type="submit"
          className={`submit-btn ${loading ? 'loading' : ''}`}
          disabled={loading}
        >
          {loading ? (
            <span className="btn-spinner"></span>
          ) : (
            '+ Add Transaction'
          )}
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
