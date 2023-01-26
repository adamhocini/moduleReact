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
    //Utilisation du composant MyForm avec l'attribut onSubmit pour passer la fonction handleSubmit
    //MyList avec l'attribut data pour passer l'état formResult
    <div className="App">
      <MyForm onSubmit={handleSubmit}></MyForm>
      <MyList data={formResult}></MyList>
    </div>
  );
}

export default App;
