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
    gap: 6rem;

    grid-template-columns: repeat(auto-fit, 220px);
    justify-content: center;
    justify-items: center;

    margin: 3em auto; 
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
    background: #111;

    
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);

    transition: transform 0.2s ease, box-shadow 0.2s ease;

    
    &:hover {
        transform: translateY(-5px); 
        box-shadow: 0 8px 20px rgba(255, 255, 255, 0.6); 
    }

    img {
        width: 220px;
        height: 250px;
        object-fit: cover;
        border-radius: 10%;
    }

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
        color: black;
        background: #26f526;
        font-family: "Montserrat", sans-serif;
        font-size: 1em;
        font-weight: 600;
        transition: 0.3s ease-in-out;

        &:hover{
            background: #00ff00;
            transform: scale(1.03);
        }
    }

`
export const ItemDoCarrinho = styled.div``