// App.js
import React, { useState } from 'react';
import InputForm from './Compnunts/InputForm';
import History from './Compnunts/History';
import Navbar from './Compnunts/Navbar';
import Footer from './Compnunts/Footer';
import './App.css';


function App() {
  const [transactions, setTransactions] = useState([]);
  const [showIntro, setShowIntro] = useState(true);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const handleLogout = () => {
    console.log('Logout');
  };

  const startApp = () => {
    setShowIntro(false);
  };

  return (
    <div>
      {!showIntro && <Navbar onLogout={handleLogout} />}
      {showIntro && (
        <div className="intro-container">
           <div className="intro">
          <h1>Welcome to SP Expense Management</h1>
          <p>Track your expenses easily with our app. Click below to get started!</p>
          <button onClick={startApp}>Let's Get Started</button>
        </div>
        </div>
      )}
      {!showIntro && (
        <div className="app-container">
          <div className="input-container">
            <InputForm addTransaction={addTransaction} />
          </div>
          <div className="history-container">
            <History transactions={transactions} />
          </div>
        </div>
      )}
      {!showIntro && <Footer />}
    </div>
  );
}

export default App;
