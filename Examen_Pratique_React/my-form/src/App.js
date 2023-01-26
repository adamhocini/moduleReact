import './App.css';
import MyForm from './components/MyForm'
import MyList from './components/MyList'

function App() {
  const [formResult, setFormResult] = useState([])

  function handleChange(data){
    setFormResult(data)
  }

  return (
    <div className="App">
      <MyForm />
      <MyList data={formResult}></MyList>
    </div>
  );
}

export default App;
