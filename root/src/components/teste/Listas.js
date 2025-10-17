function Listas({lista}) {
    return (
        <div>
            <h3>Lista de algo:</h3>
            {
                lista.length > 0 ? (
                    lista.map((item, index) => <p key={index}> {item} </p>)
                ) : (
                    <p>Não há nada na lista :</p>
                )
            }
        </div>
    );
}

export default Listas;