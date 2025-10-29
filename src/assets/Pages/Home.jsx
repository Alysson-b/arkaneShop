import React, {useState, useEffect} from "react";
import Header, {CarrinhoProvedor} from "../components/Header/Header";
import CardSection from "../components/Cards/Cards";
import FooterSection from "../components/Footer/Footer";
import InforSection from "../components/InforSection/InforSection";
import { Container } from "../components/Header/style";
import { ProvedorPesquisa} from "../components/Navgation/NavBar"
import Login from "../components/Users/User";
import ProdutosDoCarrinho from "../components/Carrinho/Carrinho";
import Carousel from "../components/Galeria/Galeria"
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import colection from "../image/coleçao.png"
import colection2 from "../image/coleçao2.png"
import colection3 from "../image/colecao3.png"



import { CartContainer } from "../components/Carrinho/style";
import ItemCarrinho from "../components/ItemCarrinho/ItemCarrinho";







function  Home(){
    const [loginAberto, setLoginAberto] = useState(false)
    const [carrinhoAberto, setCarrinhoAberto] = useState(false)
    const imagens = [colection, colection2, colection3]

    useEffect(() => {
        if (carrinhoAberto) {
            const element = document.getElementById("carrinho-container");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [carrinhoAberto]); // roda quando carrinhoAberto muda

    

    return(
        <>
        <Container>
            <ProvedorPesquisa>
                <CarrinhoProvedor>
                    <ToastContainer />
                    <Header abrirLogin={() => setLoginAberto(true)}
                        carrinhoAberto={carrinhoAberto}
                        setCarrinhoAberto={setCarrinhoAberto}
                    />
                    <Carousel images={imagens} />
                    <InforSection/>
                    <CardSection/>
                    <FooterSection/>
                </CarrinhoProvedor>
            </ProvedorPesquisa>
            {loginAberto && <Login fecharLogin={() => setLoginAberto(false)}/>}
        </Container>

        </>
    )
}

export default Home;

