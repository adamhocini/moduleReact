import './App.css';
import Depenses from './Component/Depenses';

function App() {
  const mesFaussesDepenses = [
    {
      id: 1,
      titre: 'Netflix',
      montant: 17.99,
      date: new Date(2023, 0, 6)
    },
    {
      id: 2,
      titre: 'Netflix',
      montant: 17.99,
      date: new Date(2023, 1, 6)
    },
    {
      id:3,
      titre: 'Netflix',
      montant: 17.99,
      date: new Date(2023, 2, 6)
    },
    {
      id: 4,
      titre: 'Netflix',
      montant: 17.99,
      date: new Date(2023, 3, 6)
    },
    {
      id: 5,
      titre: 'Netflix',
      montant: 17.99,
      date: new Date(2023, 4, 6)
    },
  ];

  return (
    <div className="App">
      <card
      title=''
      />
      <h1>Composant App</h1>
      <Depenses test="test value" mesDepenses={mesFaussesDepenses}/>
    </div>
  );

  const Dates = [

  ]
}

export default App;
 