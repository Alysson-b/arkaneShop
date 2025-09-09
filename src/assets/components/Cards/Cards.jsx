import React, {useState, useEffect} from "react";
import { HeaderMenu, Cards, Card } from "./style";
import {usarPesquisar} from "../Navgation/NavBar"
import { useCarrinho} from "../Header/Header"
import minhaImagem2 from '../../image/black.png'
import minhaImagem3 from '../../image/white.png'
import minhaImagem4 from '../../image/violet.png'
import minhaImagem5 from '../../image/blue.png'
import minhaImagem6 from '../../image/regataAzul.png'
import minhaImagem7 from '../../image/bermuda.png'
import minhaImagem8 from '../../image/regata.vinho.png'
import minhaImagem9 from '../../image/regata.png'
import minhaImagem10 from '../../image/whey.png'
import minhaImagem11 from '../../image/creatina.png'
import minhaImagem12 from '../../image/multi.png'
import minhaImagem13 from '../../image/bcaa.png'




function CardSection(){

    const {buscarProduto} = usarPesquisar()
    const {adicionarItemCarrinho} =useCarrinho()
    const [produtoSelecionado, setProdutoSelecionado] = useState(null)
    const [tamanhaSelecionado, setTamanhoSelecionado] = useState("")
    const produtos = [
        {img: minhaImagem2, nome: 'Camiseta Preta Fitness', preco: "89.90", descricao: "Camiseta preta de alta performance, ideal para treinos intensos.", categoria: "Camisetas"},
        {img: minhaImagem3, nome: 'Camiseta Branca Fitness', preco: "89.90", descricao: "Camiseta branca leve e confortável, perfeita para qualquer exercício.", categoria: "Camisetas"},
        {img: minhaImagem4, nome: 'Camiseta Vinho Fitness', preco: "89.90", descricao: "Camiseta vinho com tecido respirável, combina estilo e performance.", categoria: "Camisetas"},
        {img: minhaImagem5, nome: 'Camiseta Azul Fitness', preco: "89.90", descricao: "Camiseta azul fitness, resistente e ideal para atividades físicas diárias.", categoria: "Camisetas"},
        {img: minhaImagem6, nome: 'Regata Azul Fitness', preco: "89.90", descricao: "Regata azul, leve e confortável, perfeita para treinos de verão.", categoria: "Regatas"},
        {img: minhaImagem7, nome: 'Bermuda Azul Fitness', preco: "89.90", descricao: "Bermuda azul de tecido elástico, ideal para liberdade de movimento.", categoria: "Bermudas"},
        {img: minhaImagem8, nome: 'Regata Vinho Fitness', preco: "89.90", descricao: "Regata vinho, estilo e conforto para treinos intensos.", categoria: "Regatas"},
        {img: minhaImagem9, nome: 'Regata Preta Fitness', preco: "89.90", descricao: "Regata preta básica, confortável e versátil para qualquer atividade.", categoria: "Regatas"},
        {img: minhaImagem10, nome: "Whey Protein", preco: "109.90", descricao: "Pote de suplemento de proteína Whey, embalagem azul, estilo realista", categoria: "Suplementos"},
        {img: minhaImagem11, nome: "Creatina", preco: "99.90", descricao: "Pote de creatina monohidratada, embalagem vermelha, estilo realista", categoria: "Suplementos"},
        {img: minhaImagem12, nome: "Multivitamínico", preco: "59.90", descricao: "Frasco de multivitamínico em cápsulas, fundo branco, estilo realista", categoria: "Suplementos"},
        {img: minhaImagem13, nome: "BCAA", preco: "89.90", descricao: "Pote de BCAA em pó, embalagem preta com detalhes neon, estilo realista", categoria: "Suplementos"},
];
    const openModal = (produtos) => {
        setProdutoSelecionado(produtos)
        setTamanhoSelecionado("")
        setQuantidade(1)
    }
    const fecharModal = () => {
        setProdutoSelecionado(null)
        setTamanhoSelecionado("")
    }
    const filtrados = produtos.filter(p => 
        p.nome.toLowerCase().includes(buscarProduto.toLowerCase()) ||
        (p.categoria && p.categoria.toLowerCase().includes(buscarProduto.toLowerCase()))
    );

    const [quantidade, setQuantidade] = useState(1)



return(
        <HeaderMenu>
            <h1>
                Coleçao Nova <div className="line"></div>
            </h1>

        <Cards id="produtos-container">
            {filtrados.length > 0 ? (
                filtrados.map((produto, index) => (
                    <Card key={index}>
                        <img src={produto.img} alt={produto.nome} />
                        <p>Em até 2 x {(produto.preco / 2).toFixed(2)}</p>
                        <h3>{produto.preco}</h3>
                        <button onClick={() => openModal(produto)}>Comprar</button>
                    </Card>
                ))
            ) : (
                <p className="produto-nao-encontrado">Produto não encontrado!</p>
            )}
        </Cards>

        {produtoSelecionado && (
            <div className="modal-overlay" onClick={fecharModal}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-left">
                    <img src={produtoSelecionado.img} alt={produtoSelecionado.nome} />
                </div>


                <div className="modal-right">
                    <h2>{produtoSelecionado.nome}</h2>
                    <h3>{produtoSelecionado.descricao}</h3>

                <div className="quantidade">
                    <button onClick={() => setQuantidade(prev => (prev > 1 ? prev - 1 : 1))}>-</button>
                    <input type="text" value={quantidade} onChange={(e) => setQuantidade(Number(e.target.value))} min={1} />
                    <button onClick={() => setQuantidade(prev => prev + 1)}>+</button>
                </div>

                    <p className="preco">R$ {produtoSelecionado.preco}</p>
                    <ul className="tamanhos">
                        {["P", "M", "G", "GG"].map((tamanho) =>(
                            <li key={tamanho} className={tamanhaSelecionado === tamanho ? "ativo" : ""} 
                            onClick={() => setTamanhoSelecionado(tamanho)}
                            >
                            {tamanho}
                        </li>
                        ))}
                    </ul>
                    <button className="btn-comprar" disabled={!tamanhaSelecionado} onClick={() => {adicionarItemCarrinho({...produtoSelecionado, tamanho: tamanhaSelecionado, quantidade}); fecharModal()}}> {tamanhaSelecionado? "Adicionar ao carrinho": "Selecione um tamanho"}</button>
                </div>
                </div>
            </div>
        )}
        </HeaderMenu>

        
    );
}

export default CardSection;