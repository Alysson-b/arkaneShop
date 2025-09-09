import React, {createContext, useState, useContext, Children, useEffect} from "react";
import { Nav, NavBar, Navigation, Container } from "./style";
import { usarPesquisar} from "../Navgation/NavBar"
import minhaImagem from '../../image/userAkane.jpg'
import ProdutosDoCarrinho from "../Carrinho/Carrinho"





const ItemDoCarrinho = createContext()

export const CarrinhoProvedor = ({ children }) =>{
    const [carrinho, setCarrinho] = useState(() =>{
        const carrinhoSalvo = localStorage.getItem("carrinho")
        return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : []
    })
    // monitorar as mudanças do carrinho
    useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }, [carrinho]);
    
    const adicionarItemCarrinho = (novoItem) => {
        const usuarioLogado = localStorage.getItem("usuarioLogado");

            if(!usuarioLogado){
                alert("Voçe precisa estar logado para adicionar produtos ao carrinhos")
                return;
            }
        setCarrinho(prev => {
            const existe = prev.find(
                item => item.nome === novoItem.nome && item.tamanho === novoItem.tamanho
            );
            if (existe) {
                // Atualiza apenas a quantidade
                return prev.map(item =>
                    item.nome === novoItem.nome && item.tamanho === novoItem.tamanho
                        ? { ...item, quantidade: item.quantidade + novoItem.quantidade }
                        : item
                );
            } else {
                return [...prev, novoItem];
            }
        });
    };

    const calcularPrecoTotal = () => {
        return carrinho.reduce((total, item) => total + Number(item.preco) * item.quantidade, 0);
    };

    const removerItemCarrinho = (produtoIndex) => {
    setCarrinho((antigoCarrinho) => 
        antigoCarrinho.filter((_, index) => index !== produtoIndex)
    );
    }   

    const finalizarPedido = () =>{
        if(carrinho.length ===0){
            alert("Seu carrinho está vazio")
            return
        }
        alert("Pedido finalizado com sucesso!");
        setCarrinho([]);
        localStorage.removeItem("carrinho")
    }


    return(
        <ItemDoCarrinho.Provider value={{ carrinho, adicionarItemCarrinho, removerItemCarrinho, calcularPrecoTotal, finalizarPedido}}>
            { children }
        </ItemDoCarrinho.Provider>

)
}
export const useCarrinho = () => useContext(ItemDoCarrinho)



function  Header({ abrirLogin, carrinhoAberto, setCarrinhoAberto}){

    const {buscarProduto, setBuscarProduto} = usarPesquisar()
    const { carrinho } = useCarrinho()
    const [menuAberto, setMenuAberto] = useState(false)
    const secoes = ["Camisetas", "Bermudas", "Regatas", "Overaized","Suplementos", "outros" ]
    const [usuarioLogado, setUsuarioLogado] = useState(null)

    useEffect(() => {
        const checarUsuario = () => {
            const usuario = localStorage.getItem("usuarioLogado");
            if (usuario) {
                setUsuarioLogado(JSON.parse(usuario));
            } else {
                setUsuarioLogado(null);
            }
        };

        checarUsuario(); // checa ao montar

        // escuta mudanças no localStorage
        window.addEventListener("usuarioLogado", checarUsuario);

        return () => {
            window.removeEventListener("usuarioLogado", checarUsuario);
        };
}, [])
    const deslogar = () =>{
        localStorage.removeItem("usuarioLogado")
        setUsuarioLogado(null)
        alert("Voçe saiu da sua conta!")
    }

    
    const handleFiltrarSecao = (secao) => {
    setBuscarProduto(secao); // atualiza o input de pesquisa
    setMenuAberto(false);
    setCarrinhoAberto(false) 

        const element = document.getElementById("produtos-container");
            if(element){
                element.scrollIntoView({ behavior: "smooth"})
            }
    };
    

    
    return (
        <Navigation>
            <Nav>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>Sobre nós</li>
                        <li>Fale conosco</li>
                        </ul>
                            
                </div>

                <div className="produtos-menu">
                    <img src={minhaImagem} alt="logo" />
                    <h3>PRODUTOS  
                        <span className="menu-wrapper" 
                        onClick={() => setMenuAberto(!menuAberto)}> 
                        <i className="fa-solid fa-bars"></i>{menuAberto && (
                            <ul className="dropdown"> 
                            {secoes.map((secao, index) => (
                                <li key={index} onClick={() => handleFiltrarSecao(secao)}>{secao}</li>
                            ))}
                            </ul>
                        )}
                        </span> 
                    </h3>
                </div>
            </Nav>
            <NavBar>
                <div className="search-container" >
                <input value={buscarProduto} 
                onChange={(e)=> setBuscarProduto(e.target.value)}
                type="Text" placeholder="Buscar" />
                <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div>
                    {!usuarioLogado? (
                        <i className="fa-solid fa-user" onClick={abrirLogin}></i>
                    ): (
                        <i className="fa-solid fa-power-off" onClick={deslogar}></i>
                    )}
                    <div className="cart-icon">
                        <i 
                            className="fa-solid fa-cart-shopping" 
                            onClick={() => setCarrinhoAberto(true)}
                            
                        ></i>
                        {carrinho.length > 0 && ( <span className="cart-count">{carrinho.length}</span>
                    )}
                    </div>
                                
                </div>
            </NavBar>
        
        </Navigation>
    )
}
export  default Header;

