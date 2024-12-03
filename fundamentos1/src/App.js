import './App.css';
import Componentarefa from './components/Comoponentarefa';
import Eventos from './components/Eventos';
import MeuComponente from './components/MeuComponente';
import PrimeiroComponente from './components/PrimeiroComponente';
import TemplateExpression from './components/TemplateExpressions';

function App() {
  return (
    <div className="App">
        <h1>Fundamentos do ract 1</h1>
        <PrimeiroComponente/>
        {/* Usando Template expression */}
        <TemplateExpression/>
        <MeuComponente/>
        <Eventos/>
        <Componentarefa/>
    </div>
  );
};

export default App;
