import React from "react";
import { Footer, Contatos, Informaçoes, Cartao } from "./style";
import cartao from '../../image/nubank.jpg'
import cartao1 from '../../image/MasterCard.png'
import cartao2 from '../../image/visa.png'


function FooterSection(){
    return(
        <>
        <Footer>
            <div>
                <h3>FIQUE POR DENTRO DAS NOVIDADES!</h3>
            </div>
                
        <Contatos>
            <input type="text" placeholder="Seu nome"/>
            <input type="email" placeholder="Digite seu e-mail"/>
            <button>INSCREVER-ME</button>
        </Contatos>
        </Footer>
        <Informaçoes>
                
            <div>
                <h3>Contato</h3>
                <br />
                <p>Minha conta</p>
                <p>Minhas compras</p>
                <p>Meu carrinho</p>
                <p>Meus produtos favoritos</p>
            <div>
                <br />
                <h3>PRECISA DE AJUDA?</h3>
                <br />
                <p>Termos de uso</p>
                <p>Acompanhar meus pedidos</p>
            </div>
            </div>
                
            <div>
                <h3>ATENDIMENTO</h3>
                <br />
                <p>Segunda a Sábado das 8h ás 18h</p>
                <p>WhatsApp: (85) 00000.0000</p>
                <p>atendimento@ficticio.com.br</p>
            </div>
                
            <div>
                <h3>FORMAS DE PAGAMENTO</h3>
                <br />
        <Cartao>
                <img src={cartao} alt="logo nubank" />
                <img src={cartao1} alt=" logo mastercard" />
                <img src={cartao2} alt="logo visa" />
        </Cartao>
            </div>
                
        </Informaçoes>
        </>
    )
}
export default FooterSection;