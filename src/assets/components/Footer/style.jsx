import styled from "styled-components";


export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 2rem 0;

    h3{
        font-family: "Montserrat", sans-serif;
        font-weight: 700;
        font-size: 1.2em;
    }
    
`;
export const Contatos = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 2rem;
    
    input{
        padding: 8px 15px;
        width: 20em;
        border: none;
        border-radius: 8px;
        
    }

    button{
        cursor: pointer;
        padding: 8px;
        border-radius: 8px;
        border: none;
        background: #0797f7;
        font-size: 0.9em;
        font-family: "open sans", sans-serif;
        font-weight: 600;
        transition: 0.3s ease-in-out;
        &:hover{
            background: #35aeffe6;
    
        }


    }
`

export const Informaçoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 2em 0;
    background: #ffffff;
    color: #000000;
    padding: 8px;

    h3{
        font-family: 'Montserrat', sans-serif;
        font-size: 1.3em;
    }
    p{
        font-family: "open sans", sans-serif;
        font-weight: 700;
        font-size: 14px;
        color: #838282;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        
        &:hover{
            color: #000000;
        }
    }
    img{
        
        width: 80px;
        height: 50px;
        

    }
`
export const Cartao =styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 1.5em;
    img{
        border-radius: 12px;
    }
`