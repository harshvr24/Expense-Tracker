import React from 'react';

const IncomeExpense = ({ income, expense }) => {
  return (
    <div className="inc-exp-container">
      <div className="income-box">
        <div className="inc-exp-icon income-icon">↑</div>
        <div>
          <p className="inc-exp-label">Income</p>
          <p className="inc-exp-amount income-amount">+${income.toFixed(2)}</p>
        </div>
      </div>
      <div className="divider"></div>
      <div className="expense-box">
        <div className="inc-exp-icon expense-icon">↓</div>
        <div>
          <p className="inc-exp-label">Expense</p>
          <p className="inc-exp-amount expense-amount">-${Math.abs(expense).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpense;
