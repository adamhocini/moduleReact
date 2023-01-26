import './App.css';
import MyForm from './components/MyForm'


function App() {

  const MonFormulaire = [
    {Nom: 'Marie',
    Age: 21}
  ]
  return (
    <div className="App">
      <MyForm></MyForm>
    </div>
  );
}

export default App;
