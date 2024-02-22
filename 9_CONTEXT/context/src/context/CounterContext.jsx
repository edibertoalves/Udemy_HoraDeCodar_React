// 1 -  Criação do contexto
import { createContext, useState } from 'react';

// import { ChangeCounter } from '../components/ChangeCounter'

export const CounterContext = createContext();

// 2 - Criar Provider
export const CounterContextProvider = ({ children }) => {
    const [counter, setCounter] = useState(5);

    return (
        <CounterContext.Provider value={{ counter, setCounter }}>
            {children}
        </CounterContext.Provider>
    )
}

