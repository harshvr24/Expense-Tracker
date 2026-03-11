import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import api from './api/axios';
import './styles/App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTransactions = useCallback(async () => {
    try {
      setLoading(true);
      const res = await api.get('/api/transactions');
      setTransactions(res.data.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch transactions. Is the backend running?');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  const addTransaction = async (transactionData) => {
    try {
      const res = await api.post('/api/transactions', transactionData);
      setTransactions(prev => [res.data.data, ...prev]);
      return { success: true };
    } catch (err) {
      const message = err.response?.data?.error || 'Failed to add transaction';
      return { success: false, error: Array.isArray(message) ? message.join(', ') : message };
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await api.delete(`/api/transactions/${id}`);
      setTransactions(prev => prev.filter(t => t._id !== id));
    } catch (err) {
      console.error('Failed to delete transaction', err);
    }
  };

  const amounts = transactions.map(t => t.amount);
  const total = amounts.reduce((acc, item) => acc + item, 0);
  const income = amounts.filter(a => a > 0).reduce((acc, a) => acc + a, 0);
  const expense = amounts.filter(a => a < 0).reduce((acc, a) => acc + a, 0);

  return (
    <div className="app-wrapper">
      <div className="container">
        <Header />
        {error && <div className="error-banner">{error}</div>}
        <Balance total={total} />
        <IncomeExpense income={income} expense={expense} />
        <TransactionList
          transactions={transactions}
          loading={loading}
          onDelete={deleteTransaction}
        />
        <AddTransaction onAdd={addTransaction} />
      </div>
    </div>
  );
}

export default App;
