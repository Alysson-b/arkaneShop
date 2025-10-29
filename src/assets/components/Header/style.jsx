import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #000000eb;
    color: aliceblue;
    

`;

export const Navigation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px 32px;
    max-height: 150px;
    border-bottom: 1px solid white;
    background: #000;

    
`;


export const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        width: 70%;
        height: 70%;
        border-radius: 50%;
        cursor: pointer;
        box-shadow:  0 0 1px #ffffff, 0 0 5px #ffffff, 0 0 4px #ffffff;
    }
    .listProdutos ul{
        display: flex;
        
        align-items: center;
        list-style: none;
        font-size: 15px;
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        flex-wrap: wrap;
        gap: 1rem;
        position: relative;

        }
        .listProdutos li{
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        }
        .listProdutos li::before{
        content: "";
        width: 0px;
        height: 2px;
        background-color: #fcfcff;
        position: absolute;
        top: 100%;
        left: 0;
        transition: .5s ease-in-out;
        text-transform: uppercase;
        }
        .listProdutos li{
        cursor: pointer;
        transition: 0.3s ease-in-out;
        }
        .listProdutos li:hover::before{
            width: 100%;
            transform: translateY(100%);
}

    



`;
export const NavBar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h3{
            font-weight: 700;
            font-family: "Montserrat", sans-serif;
            font-size: 1rem;
            cursor: pointer;
    }
    input{
        border: none;
        padding: 12px 18px;
        border-radius: 8px;

    }
    input::placeholder
    {
        font-size: 1.3em;
        font-family: "roboto", sans-serif;
        font-weight: 600;
        color: #888;
    }

    
    
    div{
        display: flex;
        align-items: center;
        gap: 1rem;

        i{
            font-size: 1.5em;
            cursor: pointer;
        }
    }
        .cart-icon {
    position: relative;
    display: flex;
    }

    .cart-count {
    position: absolute;
    top: -8px;
    right: -10px;
    background: red;
    color: white;
    font-size: 12px;
    font-weight: bold;
    padding: 2px 6px;
    border-radius: 50%;
}
.search-container {
        position: relative;
        display: flex;
        margin-bottom: 2rem;
        

        i.fa-magnifying-glass {
            position: absolute;
            top: 50%;
            right: 45%; 
            transform: translateY(-50%);
            color: #888;
            font-size: 1em;
        }
    }

    .navLink{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        list-style: none;
        li{
            font-weight: 600;
            font-family: "Roboto", sans-serif;
            font-size: 0.8rem;
            cursor: pointer;
            transition: 0.3s ease-in-out;
        }
        li:hover{
            text-shadow: 1px 2px 3px #ffffff;
            color: #fcfcff;
        }
    }
`;