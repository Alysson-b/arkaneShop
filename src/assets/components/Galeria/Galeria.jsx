
import React, { useState, useEffect } from "react";
import { CardCarrosel } from "./style";

const Carousel = ({ images }) => {
    const [atualIndex, setAtualIndex] = useState(0);

    // Troca automática de slides
    useEffect(() => {
        const intervalo = setInterval(() => {
        setAtualIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(intervalo);
    }, [images]);

    const nextSlide = () => {
        setAtualIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setAtualIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <CardCarrosel>
        <div className="carousel">
            {images.map((img, index) => (
            <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className={index === atualIndex ? "active" : ""}
            />
            ))}

            <div className="indicators">
            {images.map((_, index) => (
                <span
                key={index}
                className={index === atualIndex ? "dot active" : "dot"}
                onClick={() => setAtualIndex(index)}
                ></span>
            ))}
            </div>
        </div>
        </CardCarrosel>
    );
    };

export default Carousel;
