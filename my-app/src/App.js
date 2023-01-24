import './App.css';
import React, { useState } from 'react';

function ExpenseTable() {
  const [expenses, setExpenses] = useState([
    { date: '01/01/2021', description: 'achat de nourriture', amount: 50 },
    { date: '01/02/2021', description: 'achat de vêtements', amount: 100 },
    { date: '01/03/2021', description: 'frais de transport', amount: 75 },
  ]);

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Montant</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={index}>
            <td>{expense.date}</td>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tableau de dépense</h1>
      </header>
    </div>
  );
}


export default App;

