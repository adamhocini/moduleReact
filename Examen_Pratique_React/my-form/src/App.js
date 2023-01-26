import './App.css';
import MyForm from './components/MyForm'
import MyList from './components/MyList'
import { useState } from 'react';

function App() {
  // Utilisation de useState pour créer un état local pour stocker les résultats du formulaire
  const [formResult, setFormResult] = useState([])

  // Fonction qui est appelée lorsque le formulaire est soumis
  function handleSubmit(data){
    // Fonction setFormResult pour mettre à jour les données du formulaire
    setFormResult([data, ...formResult])
  }

  return (
    <div className="App">
      <MyForm onSubmit={handleSubmit}></MyForm>
      <MyList data={formResult}></MyList>
    </div>
  );
}

export default App;
