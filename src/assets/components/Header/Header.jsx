import React, {createContext, useState, useContext, Children, useEffect} from "react";
import { Nav, NavBar, Navigation, Container } from "./style";
import { usarPesquisar} from "../Navgation/NavBar"
import minhaImagem from '../../image/userAkane.jpg'
import ProdutosDoCarrinho from "../Carrinho/Carrinho"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";






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
                toast("Voçe precisa Logar para Adicionar items ao carrinho !!", {position: "top-center", className: "toast-message"})
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
        })
        toast("Produto adicionado ao carrinho com sucesso!",  {possition : "top-right", className :"toast-message", })
        

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
            toast("Seu Carrinho está vazio",  {possition : "top-right", className :"toast-message", })
            return
        }
        toast("Pedido realizado com sucesso!",  {possition : "top-right", className :"toast-message", })
        setCarrinho([]);
        localStorage.removeItem("carrinho")
    }


    return(
        <ItemDoCarrinho.Provider value={{ adicionarItemCarrinho, setCarrinho, removerItemCarrinho, calcularPrecoTotal, finalizarPedido, carrinho}}>
            { children }
        </ItemDoCarrinho.Provider>

)
}
export const useCarrinho = () => useContext(ItemDoCarrinho)



function  Header({ abrirLogin, carrinhoAberto, setCarrinhoAberto}){

    const {buscarProduto, setBuscarProduto} = usarPesquisar()
    const { carrinho } = useCarrinho()
    const [menuAberto, setMenuAberto] = useState(false)
    const secoes = ["Camisetas", "Bermudas", "Regatas", "Ovesaized","Suplementos", "outros" ]
    const [loginUsuario, setLoginUsuario] = useState(false)
    const [usuarioLogado, setUsuarioLogado] = useState(null)
    
    useEffect(() => {
        const checarUsuario = () => {
            const usuario = localStorage.getItem("usuarioLogado");
            if (usuario) {
                setUsuarioLogado(JSON.parse(usuario));
                setLoginUsuario(true) 
            } else {
                setUsuarioLogado(null);
                setLoginUsuario(false) 
                
                
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
        setLoginUsuario(false)
        toast("Que pena que nao achou o que queria. Obrigado pela visita e Até logo!", {possition : "top-right", className :"toast-message", })
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
    
    const navigate = useNavigate()
    
    
    
    return (
        <Navigation>
            <Nav>
                <div>
                    <ul>
                        <li onClick={() => navigate("/ ")}>Home</li>
                        <li onClick={() => navigate("/Sobre")}>Sobre nós</li>
                        <li>Fale conosco</li>
                    </ul>
                            
                </div>

                <div className="produtos-menu">
                    <img onClick={() => navigate("/ ")} src={minhaImagem} alt="logo" />
                </div>

            </Nav>
                <div className="listProdutos">
                    <ul>
                        {secoes.map((secao, index) => ( <li key={index} onClick={() => handleFiltrarSecao(secao)}>{secao}</li>))}
                    </ul>
                </div>

            <NavBar>
                <div className="search-container" >
                <input value={buscarProduto} 
                onChange={(e)=> setBuscarProduto(e.target.value)}
                type="Text" placeholder="Buscar" />
                <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div>
                    {!loginUsuario?(
                        <h3 className="logar" onClick={abrirLogin} >Entrar</h3>
                    ):(
                        <h3 className="logar" onClick={deslogar} >Sair</h3>
                    )}

                    {!usuarioLogado? (
                        
                        <i className="fa-solid fa-user" onClick={abrirLogin}></i>
                    ): (
                        <i className="fa-solid fa-right-from-bracket" onClick={deslogar}></i>
                    )}
                    <div className="cart-icon">
                        <i 
                            className="fa-solid fa-cart-shopping" 
                            onClick={() => navigate('/Carrinho')}
                            
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

