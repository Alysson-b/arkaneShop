
import styled from "styled-components";

export const CardCarrosel = styled.div`
    .carousel {
        position: relative;
        width: 100%;
        height: 700px;
        margin: auto;
        overflow: hidden;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    }

    .carousel img {
        width: 100%;
        height: 700px;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }

    .carousel img.active {
        opacity: 1;
        position: relative;
    }

    .carousel .indicators {
        position: absolute;
        bottom: 15px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 8px;
        z-index: 2;
    }

    .carousel .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: rgba(255,255,255,0.6);
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .carousel .dot.active {
        background-color: white;
    }

    .carousel button:hover {
        background-color: rgba(0,0,0,0.7);
    }
`;
