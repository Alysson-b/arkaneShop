import styled from "styled-components";

export const CartContainer = styled.div`
    width: 90%;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin: 2em auto;
    position: relative;

    h2{
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Roboto", sans-serif;
        font-size: 1.8em;
        font-weight: 900;
        color: #000000ce;
        margin-bottom: 1rem;
    }
    p{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 6.5rem;
        font-size: 1.8em;
        font-weight: 900;
        font-family: "Montserrat", sans-serif;
        color: #000000cc;
    }

        .fechar{
            position: absolute;
            top: 2px;
            right: 1rem;
            width: 2%;
            cursor: pointer;
            margin: 1em 0;
            padding: 8px;
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

    .finalizar{
        cursor: pointer;
        margin: 1em 0;
        padding: 8px;
        border: none;
        border-radius: 8px;
        color: black;
        background: #23ff23;
        font-family: "Montserrat", sans-serif;
        font-size: 1em;
        font-weight: 600;
        transition: 0.3s ease-in-out;

        &:hover{
            background: #38f811;
            transform: scale(1.01);
        }
    }
    

    
    `
export const CartItem = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    margin: auto 1rem;
    padding: 10px 0;
    border-bottom: 1px solid #eee;


    img {
        width: 300px;
        height: 300px;
        object-fit: cover;
        border-radius: 12px;
    }

`

export const ItemInfo = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;

    h3 {
        display: flex;
        margin-bottom: 6.5rem;
        font-size: 1.8em;
        font-weight: 900;
        font-family: "Montserrat", sans-serif;
        color: #000000cc;
    }

    p {
        margin: 3px 0;
        font-size: 1.5em;
        color: #414141;
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
    }

    p.price {
        color: #ff0004;
        font-weight: 700;
        font-size: 1.4em;
        font-family: "Montserrat", sans-serif;
    }

    button{
            cursor: pointer;
            margin: 1em 0;
            padding: 8px;
            border: none;
            border-radius: 8px;
            color: black;
            background: #dd1818;
            font-family: "Montserrat", sans-serif;
            font-size: 1em;
            font-weight: 600;
            transition: 0.3s ease-in-out;

            &:hover{
                background: #f00202;
                transform: scale(1.03);
            }
    }
`;