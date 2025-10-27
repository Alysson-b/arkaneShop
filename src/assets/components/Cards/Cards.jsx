import React, {useState, useEffect} from "react";
import { HeaderMenu, Cards, Card } from "./style";
import {usarPesquisar} from "../Navgation/NavBar"
import { useCarrinho} from "../Header/Header"
import minhaImagem2 from '../../image/black.png'
import Black1 from "../../image/frontBlack.png"
import white1 from "../../image/frontWhite.png"
import blue1 from "../../image/frontBlue.png"
import vinho1 from "../../image/frontViolet.png"
import minhaImagem3 from '../../image/white.png'
import minhaImagem4 from '../../image/violet.png'
import minhaImagem5 from '../../image/blue.png'
import minhaImagem6 from '../../image/regataAzul.png'
import minhaImagem7 from '../../image/bermuda.png'
import Bblack from '../../image/bermuda_black.png'
import minhaImagem8 from '../../image/regata.vinho.png'
import minhaImagem9 from '../../image/regata.png'
import femininaPreta from "../../image/feminina_black.png"
import femininabranca from "../../image/feminina_white.png"
import femininaazul from "../../image/feminina_blue.png"

import { useNavigate } from "react-router-dom";
import ItemCarrinho from "../ItemCarrinho/ItemCarrinho";





function CardSection({produto}){

    const {buscarProduto} = usarPesquisar()
    const produtos = [
        {img: minhaImagem2, nome: 'Camiseta Preta Fitness', preco: "89.90", descricao: "Camiseta preta de alta performance, ideal para treinos intensos.", categoria: "Camisetas",
            cores: [
                {
                cor:"preta",
                frente: minhaImagem2,
                costas: Black1
                },
                {
                cor:"branca",
                frente: minhaImagem3,
                costas: white1
                },
                {
                cor:"azul",
                frente: minhaImagem5,
                costas: blue1
                },
                {
                cor:"vinho",
                frente: minhaImagem4,
                costas: vinho1
                }
        ]
        },
        {img: minhaImagem3, nome: 'Camiseta Branca Fitness', preco: "89.90", descricao: "Camiseta branca leve e confortável, perfeita para qualquer exercício.", categoria: "Camisetas",
            cores: [
                {
                cor:"branca",
                frente: minhaImagem3,
                costas: white1
                },
                {
                cor:"preta",
                frente: minhaImagem2,
                costas: Black1
                },
                {
                cor:"azul",
                frente: minhaImagem5,
                costas: blue1
                },
                {
                cor:"vinho",
                frente: minhaImagem4,
                costas: vinho1
                }
        ]
        },
        {img: minhaImagem4, nome: 'Camiseta Vinho Fitness', preco: "89.90", descricao: "Camiseta vinho com tecido respirável, combina estilo e performance.", categoria: "Camisetas",
                cores: [
                {
                cor:"vinho",
                frente: minhaImagem4,
                costas: vinho1
                },
                {
                cor:"azul",
                frente: minhaImagem5,
                costas: blue1
                },
                {
                cor:"branca",
                frente: minhaImagem3,
                costas: white1
                },
                {
                cor:"preta",
                frente: minhaImagem2,
                costas: Black1
                }
        ]
        },
        {img: minhaImagem5, nome: 'Camiseta Azul Fitness', preco: "89.90", descricao: "Camiseta azul fitness, resistente e ideal para atividades físicas diárias.", categoria: "Camisetas",
            cores: [
                {
                cor:"azul",
                frente: minhaImagem5,
                costas: blue1
                },
                {
                cor:"vinho",
                frente: minhaImagem4,
                costas: vinho1
                },
                {
                cor:"branca",
                frente: minhaImagem3,
                costas: white1
                },
                {
                cor:"preta",
                frente: minhaImagem2,
                costas: Black1
                }
        ]
        },
        {img: minhaImagem6, nome: 'Regata Azul Fitness', preco: "89.90", descricao: "Regata azul, leve e confortável, perfeita para treinos de verão.", categoria: "Regatas",
            cores: [
                {
                cor:"azul",
                frente: minhaImagem6,
                costas: minhaImagem6
                },
                {
                cor:"vinho",
                frente: minhaImagem8,
                costas: minhaImagem8
                },
                {
                cor:"preta",
                frente: minhaImagem9,
                costas: minhaImagem9
                }
        ]
        },
        {img: minhaImagem8, nome: 'Regata Vinho Fitness', preco: "89.90", descricao: "Regata vinho, estilo e conforto para treinos intensos.", categoria: "Regatas",
            cores: [
                {
                cor:"vinho",
                frente: minhaImagem8,
                costas: minhaImagem8
                },
                {
                cor:"azul",
                frente: minhaImagem6,
                costas: minhaImagem6
                },
                {
                cor:"preta",
                frente: minhaImagem9,
                costas: minhaImagem9
                }
        ]
        },
        {img: minhaImagem9, nome: 'Regata Preta Fitness', preco: "89.90", descricao: "Regata preta básica, confortável e versátil para qualquer atividade.", categoria: "Regatas",
            cores: [
                {
                cor:"preta",
                frente: minhaImagem9,
                costas: minhaImagem9
                },
                {
                cor:"azul",
                frente: minhaImagem6,
                costas: minhaImagem6
                },
                {
                cor:"vinho",
                frente: minhaImagem8,
                costas: minhaImagem8
                }
        ]
        },
        {img: minhaImagem7, nome: 'Bermuda Azul Fitness', preco: "89.90", descricao: "Bermuda azul de tecido elástico, ideal para liberdade de movimento.", categoria: "Bermudas",
            cores: [
                {
                cor:"azul",
                frente: minhaImagem7,
                costas: minhaImagem7
                },
                {
                cor:"preta",
                frente: Bblack,
                costas: Bblack
                }
        ]
        },
        {img: Bblack, nome: 'Bermuda Preta Fitness', preco: "89.90", descricao: "Bermuda Preta de tecido elástico, ideal para liberdade de movimento.", categoria: "Bermudas",
            cores: [
                {
                cor:"preta",
                frente: Bblack,
                costas: Bblack
                },
                {
                cor:"azul",
                frente: minhaImagem7,
                costas: minhaImagem7
                }
        ]
        },
        {img: femininaPreta, nome: 'Camiseta Preta feminina Fitness', preco: "79.90", descricao: "Camiseta preta básica, confortável e versátil para qualquer atividade.", categoria: "Camisetas",
            cores: [
                {
                    cor:"preta",
                    frente: femininaPreta,
                    costas: femininaPreta
                },
                {
                    cor:"branca",
                    frente: femininabranca,
                    costas: femininabranca
                },
                {
                cor:"azul",
                frente: femininaazul,
                costas: femininaazul
                }
        ]
        },
        {img: femininabranca, nome: 'Camiseta Branca feminina Fitness', preco: "79.90", descricao: "Camiseta Branca básica, confortável e versátil para qualquer atividade.", categoria: "Camisetas",
            cores: [
                {
                    cor:"branca",
                    frente: femininabranca,
                    costas: femininabranca
                },
                {
                    cor:"preta",
                    frente: femininaPreta,
                    costas: femininaPreta
                },
                {
                cor:"azul",
                frente: femininaazul,
                costas: femininaazul
                }
        ]
        },
        {img: femininaazul, nome: 'Camiseta Azul feminina Fitness', preco: "79.90", descricao: "Camiseta azul básica, confortável e versátil para qualquer atividade.", categoria: "camisetas",
            cores: [
                {
                cor:"azul",
                frente: femininaazul,
                costas: femininaazul
                },
                {
                    cor:"branca",
                    frente: femininabranca,
                    costas: femininabranca
                },
                {
                    cor:"preta",
                    frente: femininaPreta,
                    costas: femininaPreta
                }
                
        ]
        },
    ];
    const filtrados = produtos.filter(p => 
        p.nome.toLowerCase().includes(buscarProduto.toLowerCase()) ||
        (p.categoria && p.categoria.toLowerCase().includes(buscarProduto.toLowerCase()))
    );
    
        const navigate = useNavigate()
        const verProduto = () =>{
            navigate("/itemCarrinho", {state: {produtoSelecionado: produto}})
        }
    
    
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
                        <button onClick={() => navigate('/itemCarrinho', {state: {produto }})}>Comprar</button>
                    </Card>
                ))
            ) : (
                <p className="produto-nao-encontrado">Produto não encontrado!</p>
            )}

        </Cards>
        </HeaderMenu>

        
    );
}

export default CardSection;