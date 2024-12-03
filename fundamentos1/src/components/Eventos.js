const Eventos = ( ) => {

    const handleMeuEvento = (e) => {
        console.log(e);
        console.log("Ativou o evento.");
    };

    return(
        <div>
            <div>
                <button onClick={handleMeuEvento}>Clique aqui!</button>
            </div>
            <div>
            <button onClick={console.log("O botão foi clicado!")}>Clique aqui também!</button>
            </div>
            <div>
                <button onClick={() => {
                    if(true){
                        console.log("Isso não deveria estar aqui!")
                    }
                }
                }>Clique!</button>
            </div>
        </div>
        
    );
};

export default Eventos;