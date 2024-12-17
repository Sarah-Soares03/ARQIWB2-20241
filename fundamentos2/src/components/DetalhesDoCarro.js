const DetalhesDoCarro = ({marca,modelo,km}) =>{
    return(
        <div>
            <h2>Detalhes Do Carro</h2>
            <ul>
                <li>Marca : {marca}</li>
                <li>Modelo : {modelo}</li>
                <li>Kilomettagem : {km}</li>
            </ul>
        </div>
    )
}

export default DetalhesDoCarro;