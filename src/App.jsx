import React from "react"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./assets/Pages/Home"
import ItemCarrinho from "./assets/components/ItemCarrinho/ItemCarrinho"
import { ProvedorPesquisa } from "./assets/components/Navgation/NavBar"
import { CarrinhoProvedor } from "./assets/components/Header/Header"
import { Container } from "./assets/components/Header/style"
import ProdutosDoCarrinho from "./assets/components/Carrinho/Carrinho"
import { Sobre } from "./assets/Pages/Sobre"
import { ToastContainer } from "react-toastify"


function App() {
  return (
    <Container>
          <BrowserRouter>
            <ProvedorPesquisa>
              <CarrinhoProvedor>
                  <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="itemCarrinho" element={<ItemCarrinho />} /> 
                    <Route path="Carrinho" element={<ProdutosDoCarrinho />} /> 
                    <Route path="Sobre" element={<Sobre />} /> 
                  </Routes>
                <ToastContainer />
              </CarrinhoProvedor>
            </ProvedorPesquisa>
          </BrowserRouter>
      </Container>
  )
  

  
}

export default App
