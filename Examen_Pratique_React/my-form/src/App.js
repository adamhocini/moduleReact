import './App.css';
import MyForm from './components/MyForm'
import MyList from './components/MyList'
import { useState } from 'react';

function App() {
  const [formResult, setFormResult] = useState([])

  function handleSubmit(data){
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
