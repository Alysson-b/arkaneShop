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

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2em;
        margin: 20px;
    }
    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2em;
        list-style: none;

        li{
            font-weight: 600;
            font-family: "Roboto", sans-serif;
            font-size: 0.9rem;
            cursor: pointer;
            transition: 0.3s ease-in-out;
        }
        li:hover{
            text-shadow: 0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #ffffff;
            color: #fcfcff;


        }
    }
    img{
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        cursor: pointer;
    }
    .Text{
        margin-bottom: 8px  0px;
    }

    



`;
export const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2em;
    gap: 1.8rem;

    h3{
            font-weight: 700;
            font-family: "Montserrat", sans-serif;
            font-size: 1rem;
            cursor: pointer;
    }
    input{
        width: 15rem;
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
        justify-content: center;
        gap: 2em;

        i{
            font-size: 1.5em;
            cursor: pointer;
        }
    }
        .cart-icon {
    position: relative;
    display: inline-block;
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
        display: inline-block;
        

        i.fa-magnifying-glass {
            position: absolute;
            top: 50%;
            right: 15px; 
            transform: translateY(-50%);
            color: #888;
            font-size: 1em;
        }
    }
`;