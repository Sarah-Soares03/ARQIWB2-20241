const Componentarefa = ( ) => {
    const um = 3
    const dois = 10
    const soma = um+dois
    return(
        <div>
        <h1>A soma dos números {um} + {dois} é = {soma}</h1>
        <button onClick={console.log(soma)}>Clique aqui</button>
        </div>
    );
};

export default Componentarefa;