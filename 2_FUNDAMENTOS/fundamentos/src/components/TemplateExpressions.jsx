const TemplateExpressions = () => {

    const name = "Ediberto"

    const data = {
        idade : 45,
        profissao : 'analista desenvolvedor'
    }

    return (
        <>
            <h2>Olá { name }</h2>
            <h2>idade: { data.idade } e profissão: {data.profissao}</h2>
        </>
    )

}

export default TemplateExpressions