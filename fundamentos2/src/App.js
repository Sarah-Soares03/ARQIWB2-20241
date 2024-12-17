import './App.css';
import GerenciarDados from './components/GerenciarDados';
import Listas from './components/Listas';
import Condicional from './components/Condicional';
import MostrarNome from './components/MostrarNome';
import DetalhesDoCarro from './components/DetalhesDoCarro';

function App() {
  return (
    <div className="App">
      <h1>Justin Bieber</h1>
      {/*publico*/}
      <img src="/jb.jpeg" alt="Justin"/>
      
        {/*Gerecnciar*/}
        <GerenciarDados/>
        <Listas/>
        <Condicional/>
        <MostrarNome Nome='SARAH'/>
        <DetalhesDoCarro marca='aaa' modelo='bbbbb' km='100000'/>
    </div>
  );
}

export default App;