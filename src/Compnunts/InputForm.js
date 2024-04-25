import React, { useState } from 'react';
import '../Styles/InputForm.css'; // Adjusted import path

function InputForm({ addTransaction }) {
  const [type, setType] = useState('income');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [month, setMonth] = useState('Choose Month');
  const [date, setDate] = useState('');

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
    setDate(''); // Reset date selection when month changes
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount.trim() && month !== 'Choose Month') {
      const transaction = {
        type,
        title,
        amount: parseFloat(amount),
        month,
        date: type === 'income' ? null : date // Set date to null for income transactions
      };
      addTransaction(transaction);
      setTitle('');
      setAmount('');
      setMonth('Choose Month');
      setDate('');
    }
  };
  
  const handleTypeChange = (e) => {
    setType(e.target.value);
    if (e.target.value === 'income') {
      setDate(''); // Reset date when switching to income
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="month-picker-container">
        <select value={month} onChange={handleMonthChange}>
          <option value="Choose Month">Choose Month</option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
       
      </div>
      <label>
        <input type="radio" value="income" checked={type === 'income'} onChange={handleTypeChange} />
        Income
      </label>
      <label>
        <input type="radio" value="expense" checked={type === 'expense'} onChange={handleTypeChange} />
        Expense
      </label>
      {type === 'expense' && ( // Conditionally render date picker for expenses
          <input type="date" value={date} onChange={handleDateChange} />
        )}
      {type === 'expense' && (
        <input type="text" value={title} onChange={handleTitleChange} placeholder="Expense Title" />
      )}
      <input type="number" value={amount} onChange={handleAmountChange} placeholder="Amount" />
      <button type="submit">Add</button>
    </form>
  );
}

export default InputForm;
