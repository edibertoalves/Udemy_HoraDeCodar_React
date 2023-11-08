const Challenge = () => {

    const numA = 5;
    const numB = 2;

    const result = () => {
        console.log("o valor de A é " + numA)
        console.log("o valor de B é " + numB)               
    }

    const soma = () => {
        console.log("a soma dos valores é " + (numA + numB))
    }

    return (
        <div>
            <div>
                <button onClick={ result }>clique aqui sobre os valores</button>
            </div>
            <div>
                <button onClick={ soma }>Clique aqui para saber o total</button>
            </div>
        </div>        
    )
}

export default Challenge