import React from "react"
import { CartContainer, CartItem, ItemInfo } from "./style"
import { useCarrinho} from "../Header/Header"




function ProdutosDoCarrinho({ fecharCarrinho}){
    const {carrinho, removerItemCarrinho, calcularPrecoTotal, finalizarPedido} = useCarrinho()

    return (
        <CartContainer id="carrinho-container">
            <h2>Meu Carrinho</h2>
            <button className="fechar" onClick={fecharCarrinho}>X</button>
            {carrinho.length === 0 ? (
                <p>Seu Carrinho está vazio</p>
            ):(
            carrinho.map((item, index) =>(
                <CartItem key={index}>
                    <img src={item.img} alt={item.nome} />
                <ItemInfo>
                    <h3>{item.nome}</h3>
                    <p>Quantidade: {item.quantidade}</p>
                    <p>Tamanho: {item.tamanho}</p>
                    <p className="price">R$ {calcularPrecoTotal().toFixed(2)}</p>
                    <button className="remove" onClick={() => removerItemCarrinho(index)}>Remover item</button>
                </ItemInfo>
            
                </CartItem>
            ))
        )}
        {carrinho.length > 0 && (
        <button className="finalizar" onClick={finalizarPedido}>Finalizar pedido</button>
    )}
        </CartContainer>
    )

}
export default ProdutosDoCarrinho
