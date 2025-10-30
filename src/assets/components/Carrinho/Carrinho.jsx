import React, { useState } from "react"
import { CartContainer, CartItem, ItemInfo, DadosCompra } from "./style"
import Header, { useCarrinho} from "../Header/Header"
import FooterSection from "../Footer/Footer"
import ItemCarrinho from "../ItemCarrinho/ItemCarrinho"
import { useLocation, useNavigate } from "react-router-dom"
import QrCode from "../../../../public/QrCode.png"
import boleto from "../../../../public/boletobancario.jpg"
import cartao from "../../../../public/cartao.png"
import axios from "axios"
import { toast } from "react-toastify"







function ProdutosDoCarrinho({ fecharCarrinho}){

    const bairros = [
    { bairro: "Aldeota", taxa: 18.00, zona: "nobre" },
    { bairro: "Meireles", taxa: 18.00, zona: "nobre" },
    { bairro: "Centro", taxa: 10.00, zona: "central" },
    { bairro: "Bairro de Fátima ", taxa: 12.00, zona: "central" },
    { bairro: "Praia de Iracema ", taxa: 18.00, zona: "nobre" },
    { bairro: "Barra do Ceará", taxa: 8.00, zona: "periferia" },
    { bairro: "Antônio Bezerra ", taxa: 10.00, zona: "central" },
    { bairro: "Bom Jardim ", taxa: 8.00, zona: "periferia" },
    { bairro: "Pirambu ", taxa: 15.00, zona: "periferia" },
    { bairro: "Carlito Pamplona ", taxa: 8.00, zona: "periferia" },
];


    const {carrinho, setCarrinho, removerItemCarrinho, calcularPrecoTotal, finalizarPedido} = useCarrinho() 
    const { state } = useLocation()
    const [quantidade, setQuantidade] = useState(1)
    const navigate = useNavigate()
    const [msgFrete, setMsgText] = useState("")
    const [taxaFrete, setTaxaFrete] = useState(null)
    const [dadosCep, setDadosCep] = useState()
    const [pesquisarDados, setPesquisarDados] = useState("")
    const [view, setView] = useState("resumo")
    const [metodo, setMetodo] = useState("pix")

    const aumentarQtd = (index) => {
        setCarrinho(prev => prev.map((item, i) => i === index ?{...item, quantidade: item.quantidade + 1} :item))
    }
    const diminuirQtd = (index) =>{
        setCarrinho(prev => prev.map((item, i) => {
            if(i === index){
                if(item.quantidade > 1) return{...item, quantidade: item.quantidade - 1}
                return item
            }
            return item
        }))
    }
    const precoTotal = carrinho.reduce((total, item) => {
        return total + Number(item.preco) * item.quantidade
    }, 0)
    const totalPrazo =  precoTotal * 1.05
    const parcelaPrazo = totalPrazo / 10
    const valorPix = precoTotal * 0.95
    const ecoPIX = precoTotal - valorPix
    const totalComFrete = taxaFrete ? precoTotal + taxaFrete: precoTotal

        async function BuscarDados() {
            try{
                const response = await fetch(`http://viacep.com.br/ws/${pesquisarDados}/json/`)
                if(!response.ok){
                    throw new Error('Error na requisição: ' + response.status)

                }
                const data = await response.json()
                console.log(data)
    
                setDadosCep(data)
                document.getElementById("cep").value = "";
    
            if(precoTotal >= 149.90) {
                setMsgText("Frete Gratis para compras acima de R$ 149,90")
                setTaxaFrete(0)
                return
        
            }
    
            const bairroEncontrado = bairros.find(b =>
                b.bairro.toLowerCase() === data.bairro.toLowerCase()
            )
            if(!bairroEncontrado){
                setMsgText("Bairro fora da área de entrega")
                setTaxaFrete(null)
                return
            }
    
            setMsgText(`Taxa de entrega: R$ ${bairroEncontrado.taxa.toFixed(2)}`)
            setTaxaFrete(bairroEncontrado.taxa)
                }
    
            catch(error){
                    console.log(error)
                    setMsgText("Entrega não disponível")
    
                }
        }

    
    return (
        <>
        <Header />
        <CartContainer id="carrinho-container">

        <div className="containerCart">


            {carrinho.length === 0 ? (
                
                <p className="carrinhoVazio">Seu Carrinho está vazio! <i class="fa-solid fa-cart-plus"></i></p>
            ):(
                carrinho.map((item, index) =>(
                <CartItem key={index}>
                        <img src={item.img} alt={item.nome} />

                        <div className="descDiv">
                            <h3>{item.descricao}</h3>
                            <p>Tamanho: {item.tamanho}</p>
                            <br />
                            <br />

                        <div className="quantidade">
                            {item.quantidade > 1 ? (
                            <button onClick={() => diminuirQtd(index)}>-</button>
                            ) : (
                            <button onClick={() => removerItemCarrinho(index)}><i class="fa-solid fa-trash"></i></button>
                            )}
                            <input type="text" value={item.quantidade} readOnly />
                            <button onClick={()=> aumentarQtd(index)} >+</button>
                            </div>
                        </div>
                        <div className="valorPag">
                            <h3 className="preco">Preço: {((item.preco) * item.quantidade).toFixed(2)}</h3>
                            <br />
                            <p>R${(item.preco * item.quantidade * 0.95).toFixed(2)} no PIX ( -5% )</p>
                        </div>
                    <ItemInfo>
                    </ItemInfo>

                
                </CartItem>
            ))
        )}
        </div>
        {view  === "resumo" && (
            
        <div  className="precoTotal" >

            <div className="title">
                <h3><i class="fa-solid fa-list-check"></i> Resumo</h3>
            </div>

            <div className="valorTotal">
                <h4>Valor dos produtos: </h4>
                <p className="price">R$ {totalComFrete.toFixed(2)}</p>
            </div>

            <div className="valorParcela">
                <h4>Total a prazo: </h4>
                    <div>
                        <p>R${totalPrazo.toFixed(2)}</p>
                        <p>(em até 10x de R$ {parcelaPrazo.toFixed(2)} sem juros)</p>
                    </div>
            </div>

            <div className="valorPix">
                <div>
                    <h4>Valor a vista: </h4>
                    <h4 className="pix">Pix:</h4>
                </div>
                <div className="divPix">
                    <p>R$ {(calcularPrecoTotal().toFixed(2) * 0.95).toFixed(2)}</p>
                    <p>(Economize: R${ecoPIX.toFixed(2)})</p>
                </div>
            </div>

            <div className="frete">
                            <label htmlFor="cep"><i class="fa-solid fa-truck-fast"></i> Calcular frete e prazo</label>
                            <div className="cep">
                                <input onChange={(e) => setPesquisarDados(e.target.value )} type="tel" id="cep" placeholder="Digite seu CEP" maxLength={9} />
                                <button onClick={()  => BuscarDados()}>OK</button>

                            </div>
                                {dadosCep && (
                                <div className="dados">
                                <p className="cliente"><strong>{dadosCep.logradouro} - {dadosCep.localidade} /{dadosCep.uf}</strong></p>
                                <br />
                                <p><strong>{msgFrete}</strong></p>
                                </div>
                                
                        )}
                        </div>

            <div className="btns">
                <button onClick={() => navigate("/ ")} className="back">Continuar Comprando</button>
                {carrinho.length > 0 && ( <button id="finalizar" onClick={() => setView("pagamento")}>Finalizar pedido</button>)}
            </div>


        </div>
        )} 

        {view === "pagamento" && (
            <DadosCompra className="cardPagamento">
                <i onClick={()=> setView("resumo")} class="fa-solid fa-backward-fast"></i>
                <h2> Forma de Pagamento </h2>
                <div className="pagamentoPix" onClick={() => setMetodo("pix")}>
                    <p>PIX</p>
                    <i class="fa-brands fa-pix"></i>
                </div>
                <div className="pagamentoBoleto" onClick={() => setMetodo("boleto")}>
                    <p>Boleto</p>
                    <i class="fa-solid fa-ticket"></i>
                </div>
            <div className="pagamentoCredito" onClick={() => setMetodo("credito")}>
                <p>Cartão de credito</p>
                <i class="fa-solid fa-credit-card"></i>
            </div>




            { metodo === "pix" &&(    
                <div className="containerPix">
                    <h3>Escaneie o Qr Code!</h3>
                    <p>Valor: {totalComFrete.toFixed(2)}</p>
                    <img src={QrCode} alt="QrCode" />
                </div>)}
                
            {metodo === "boleto" &&( 
                <div className="containerBoleto">
                    <h3>Boleto Emitido!</h3>
                    <img src={boleto} alt="QrCode" />
            </div>)}
            
            {metodo === "credito" &&(
                <div className="containerCredito">
                <div>
                    <img src={cartao} alt="" />
                </div>
                <div className="inputs">
                    <input type="number" placeholder="Número do cartão*  0000-0000-0000-0000" />
                    <input type="text" placeholder="Nome impressono cartão*"/>
                    <div className="validade">
                        <input type="number" placeholder="Validade* 00/00"/>
                        <input className="cvv" type="number" placeholder="CVV"/>
                    </div>
                    <input type="text" placeholder="Apelido para este cartão*"/>
                    <div className="validade">
                        <input type="number" placeholder="CPF/ CNPJ do titular"/>
                        <input type="number" placeholder="Data de nascimento"/>
                    </div>
                    <button  type="submit" onClick={finalizarPedido}>PAGAR</button>
                </div>

            </div>)}
            </DadosCompra>
        )}

        </CartContainer>
        <FooterSection />
        </>
    )

}
export default ProdutosDoCarrinho
