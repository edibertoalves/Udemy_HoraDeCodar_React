const Events = () => {

    const HandleMyEvent = (e) => {
        console.log(e)

        console.log("Ativado o evento");
    }

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>
        }
        else {
            return <h1>Também posso renderizar isso!</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={HandleMyEvent}>Clique Aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou")}>Clique aqui também</button>
            </div>
            <div>
                <button onClick={() => {
                    if (true) {
                        console.log("Esse clique não deveria existir!")
                    }
                }}>Clique aqui também por favor</button>
            </div>
            { renderSomething(true) }
            { renderSomething(false) }
        </div>
    )
}

export default Events