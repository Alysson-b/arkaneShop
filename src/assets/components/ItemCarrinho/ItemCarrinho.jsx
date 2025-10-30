import React, { useEffect, useState } from "react";
import Header, { useCarrinho} from "../Header/Header";
import FooterSection from "../Footer/Footer";
import {ItemsCarrinho, ItemImage, InforItems} from './style'
import { Cards, Card } from "../Cards/style";
import { useLocation } from "react-router-dom";
import { usarPesquisar } from "../Navgation/NavBar";
import { toast } from "react-toastify";





export default function ItemCarrinho() {

const location = useLocation()
const {produtoSelecionado } = location.state
const { state } = useLocation()
const produto = state?.produto


const [quantidade, setQuantidade] = useState(1)
const [tamanhaSelecionado, setTamanhoSelecionado] = useState("")
const [imagemAtiva, setImagemAtiva] = useState("frente")

    
    let coresArray = []
    if (produto?.cores) {
        if (Array.isArray(produto.cores)) {
            coresArray = produto.cores
        } 
        else if (typeof produto.cores === "object") {
            coresArray = Object.entries(produto.cores).map(([cor, img]) => ({
                cor: cor.charAt(0).toUpperCase() + cor.slice(1),
                img: img,
            }))
        }
    }
    const [corSelecionada, setCorSelecionada] = useState(coresArray[0]?.cor || "")
    const [imagemAtual, setImagemAtual] = useState(coresArray[0]?.img || produto?.img)
    const corAtual = coresArray.find((c)  => c.cor === corSelecionada)
    

    const precoTotal = quantidade * Number(produto.preco)
    const precoPix = precoTotal  * 0.95;
    const precoParcelado = precoTotal / 2

    const {adicionarItemCarrinho} = useCarrinho()
    
    const escolherCor = (e) => {
        const novaCor = e.target.value
        setCorSelecionada(novaCor)
        
        const corEncontrada = coresArray.find((c) => c.cor === novaCor)
        if(corEncontrada){
            if(imagemAtiva === "frente"){
                setImagemAtual(corEncontrada.frente)
            }else{
                setImagemAtual(corEncontrada.fostas)

            }
        }
        
        
    }
    const visualizarImagem = (vista) =>{
        setImagemAtiva(vista)

        const corEncontrada = coresArray.find((c) => c.cor === corSelecionada)
        if(corEncontrada){
            if (vista === "frente") {
                setImagemAtual(corEncontrada.frente)
                
            } else {
                setImagemAtual(corEncontrada.costas)
            }
        }
    }



    

    if (!produto) {
    return <p>Produto não encontrado!</p>
}
    

    if (!produtoSelecionado){
        return (
            <>
            <Header />
            <ItemsCarrinho>

                {corAtual &&(
                    <div className="imgmin">
                    <img className={`miniatura ${imagemAtiva === "frente" ? "ativa" : ""}`} onClick={() => visualizarImagem("frente")}  src={corAtual.frente || "/placeholder.svg"} />
                    <img className={`miniatura ${imagemAtiva === "costas" ? "ativa" : ""}`}  onClick={() => visualizarImagem("costas")}  src={corAtual.costas || "/placeholder.svg"} />
                    </div>
                )}

                <ItemImage>
                    <img src={imagemAtual || "/placeholder.svg"} />
                </ItemImage>
                    <InforItems>
                        <div className="descriçao">
                            <div>
                                <h2>{produto.nome}</h2>
                                <h3>{produto.descricao}</h3>
                                <br />
                                <br />
    
                                <div className="descriçaoPreco">
                                    <h3>R$ {precoTotal.toFixed(2)}</h3>
                                    <br />
                                    <p className="preco">Em ate 2x de {precoParcelado.toFixed(2)} sem juros</p>
                                    <p className="preco">R$ {precoPix.toFixed(2)} no PIX ( -5% )</p>
                                    <br />
                                    <a href="">Detalhes de parcelamento</a>
                                </div>
                            </div>
    
                        <div className="quantidade">
                            <button onClick={() => setQuantidade(prev=>(prev > 1 ? prev-1 : 1))} >-</button>
                            <input type="text" value={quantidade} readOnly />
                            <button onClick={()=> setQuantidade(prev => prev + 1)} >+</button>
                        </div>
                        <div className="tamanhos">
                            <ul className="tamanho">
                                {["P", "M", "G", "GG"].map(t =>(
                                    <li key={t} className={tamanhaSelecionado === t ? 'ativo' : ""}
                                    onClick={() => setTamanhoSelecionado(t)}>{t}</li>
                                ))}
                            </ul>
                        </div>
                        {coresArray.length > 0 && (

                            <div className="cor">
                            <label htmlFor="cor">Cor </label>
                                <select name="cor" id="cor"  value={corSelecionada} onChange={escolherCor}>
                                    {coresArray.map((corObj) =>(
                                        <option key={corObj.cor} value={corObj.cor}>{corObj.cor}</option>
                                    ))}
                                    
                                </select>
                        </div>
                        )}
                        <div className="addBtn">
                                <button className="btn-comprar " disabled={!tamanhaSelecionado} onClick={() => adicionarItemCarrinho({...produto, tamanho:tamanhaSelecionado, cor: corSelecionada, img: imagemAtual, quantidade}) } > {tamanhaSelecionado? "Adicionar ao carrinho" : "Selecione um tamanho"} </button>
                        </div>
                        </div>
                        
                    </InforItems>
                    
    
            </ItemsCarrinho>
            <FooterSection />
            </>
    )

    }
}

