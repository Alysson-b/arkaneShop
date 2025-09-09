import React, { createContext, useContext, useState } from "react";

const PesquisarContexto = createContext();



export function ProvedorPesquisa({ children}){
    const [buscarProduto, setBuscarProduto] = useState("")

    return(
        <PesquisarContexto.Provider value={{ buscarProduto, setBuscarProduto}}>
            {children}
        </PesquisarContexto.Provider>

    )

}

export function usarPesquisar(){
    return useContext(PesquisarContexto)
}