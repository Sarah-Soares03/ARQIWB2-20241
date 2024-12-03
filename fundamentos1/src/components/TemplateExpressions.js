const TemplateExpression = () => {
    const nome = "Sarah";
    const dados = {
        idade: 17,
        profissao: "estudante"
    }
    return (
        <div>
            <h2>Olá, {nome}! Seja bem-vindo(a)!</h2>
            <h3>Você é {dados.profissao} e tem {dados.idade} anos.</h3>
            <p>{console.log("Usando o React!")}</p>
        </div>
    );
};

export default TemplateExpression;