import { useState } from 'react';

function Home() {
    return (
        <div>
            <div>Calculadora De Soma E Subtração De 2</div>
            <Contador />
        </div>
    )
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 2);
    }

    function zerarContador() {
        setContador(0);
    }

    function reduzirContador() {
        setContador(contador - 2);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
            <button onClick={zerarContador}>Zerar</button>
            <button onClick={reduzirContador}>Reduzir</button>
        </div>
    )
}

export default Home