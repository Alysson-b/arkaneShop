import styled from "styled-components";

export const HeaderMenu = styled.div`
    display: flex;
    flex-direction: column;
    margin: 4em 0em;
    z-index: 1;

    h1{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-family: 'open sans', sans-serif;
        font-weight: 600;
        font-size: 2.2em;
    }
    .line{
        border-bottom: 0.1px solid #fff;
        width: 8%;
        
    }
`;

export const Cards = styled.div`
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    margin: 8rem auto; 
    width: 100%;
    max-width: 1200px; 

    .produto-nao-encontrado {
    grid-column: 1 / -1;
    text-align: center;
    font-size: 1.9rem;
    color: #ffffff; 
    font-weight: bold;
    margin: 2rem 0;
}
    
`
export const Card= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 1em;
    gap: 10px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    
    &:hover {
        /* transform: translateY(-2px);  */
        box-shadow: 0 0px 8px rgba(255, 255, 255, 0.7); 
        background: transparent;
        
    }

    img {
        width: 220px;
        height: 250px;
        object-fit: cover;
        border-radius: 10%;
    }
+
    p{
        margin: 1em 0;
        font-family: "roboto", sans-serif;
        font-size: 1.1rem;
    }
    h3{
        font-family: "Montserrat", sans-serif;
        font-size: 1.9em;
    }
    button{
        cursor: pointer;
        margin: 1em 0;
        padding: 0.5em 4em;
        border: none;
        border-radius: 8px;
        color: #fff;
        background: #4d4d4d;
        font-family: "Montserrat", sans-serif;
        font-size: 1em;
        font-weight: 600;
        transition: 0.3s ease-in-out;

        &:hover{
            background: #036903;
            transform: scale(1.03);
        }
    }

`
export const ItemDoCarrinho = styled.div``