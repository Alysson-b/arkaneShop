import styled from "styled-components";

export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: aliceblue;
    height: 10vh;
    color: #000;

    p{
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 1.3rem;
        margin: 1.1rem;
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    i{
        font-size: 1.5em;
    }
    .fa-pix{
        color: #27fa27;
    }
    .fa-truck-fast{
        color: #0847f7;
    }
    
`;