import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const useCounterContext = () => {

    const context = useContext(CounterContext);

    if (!context) {
        throw new Error("useCounterContext must be used within a CounterContextProvider")
        console.log("contexto não encontrado")
    }

    return context
}