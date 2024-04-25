import React from 'react';
import '../Styles/History.css'; // Adjusted import path

function History({ transactions }) {
  // Group transactions by month
  const transactionsByMonth = transactions.reduce((acc, transaction) => {
    const month = transaction.month;
    if (!acc[month]) {
      acc[month] = { income: 0, expenses: [], savings: 0 };
    }
    if (transaction.type === 'income') {
      acc[month].income += transaction.amount;
    } else if (transaction.type === 'expense') {
      acc[month].expenses.push(transaction);
    }
    return acc;
  }, {});

  // Calculate monthly savings and total savings
  let totalSavings = 0;
  Object.values(transactionsByMonth).forEach(month => {
    month.savings = month.income;
    month.expenseTotal = month.expenses.reduce((total, expense) => total + expense.amount, 0);
    month.savings -= month.expenseTotal;
    totalSavings += month.savings;
  });

  return (
    <div className="history-container">
      <h2>Transaction History</h2>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Month</th>
            <th>Income</th>
            <th>Expenses</th>
            <th>Monthly Savings</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(transactionsByMonth).map(([month, data]) => (
            <tr key={month}>
              <td>{month}</td>
              <td>{data.income}</td>
              <td>
                <ul>
                  {data.expenses.map((expense, index) => (
                    <li key={index}>
                      <span>Sr. No: {index + 1}</span> | <span>Date: {expense.date}</span> | <span>Expense Name: {expense.title}</span> | <span>Amount: {expense.amount}</span>
                    </li>
                  ))}
                </ul>
              </td>
              <td>{data.savings}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-savings">
        <h3>Total Savings</h3>
        <p>{totalSavings}</p>
      </div>
    </div>
  );
}

export default History;
