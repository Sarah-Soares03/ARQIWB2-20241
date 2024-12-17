const Condicional = () => {
    const x = false;

    const nome = 'Sarah'

    return(
        <div>
            {x && <p>Imprime se X for true</p>}
            {!x && <p> Imprime se X for false</p>}
            {
                nome === 'Sarah' ?
                (   
                    <div>
                        Nome é Sarah
                    </div>)
                    :
                    (
                        <div>
                            Nome não é Sarah
                        </div>
                    )
            }
        </div>
    )
}

export default Condicional;