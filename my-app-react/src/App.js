import logo from './logo.svg';
import './App.css';

function App() {
  const Tab = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];


  return (
    <div>
      <h2>C'est parti</h2>
      <Tab items={Tab} />
    </div> 
  );  return (
    <div>
      <h2>C'est parti</h2>
      <Tab items={Tab} />
    </div> 
  );  return (
    <div>
      <h2>C'est parti</h2>
      <Tab items={Tab} />
    </div> 
  );  return (
    <div>
      <h2>C'est parti</h2>
      <Tab items={Tab} />
    </div> 
  );
}

/*<div className="App">
<header className="App-header">
<h2>
 Dépense du mois.
</h2>
</header>
<card>

</card>
</div> */

export default App;
