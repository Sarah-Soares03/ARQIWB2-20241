import {useState} from "react";

const GerenciarDados = () => {
    let numero = 10
    const [num, setNum] = useState(15);
        return(
        <div>
            <p>Número:{numero}</p>
            <button onClick={()=>{
            numero = 15;
            console.log('Número:' + numero)
            }}
            >Alterar número</button>
            <p>Número 2:{num}</p>
            <button onClick={() => setNum(30)}>Alterar</button>
        </div>
    );
}

export default GerenciarDados;