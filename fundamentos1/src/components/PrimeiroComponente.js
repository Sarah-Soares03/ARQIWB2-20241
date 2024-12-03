import MeuComponente from "./MeuComponente";

//criação com arrow function
const PrimeiroComponente = () => {
    return (
        <div>
            {/* Meu primeiro comentário em JSX */}
            <h1>Meu Primeiro Componente!</h1>
            <MeuComponente/>
        </div>
    );
};

export default PrimeiroComponente