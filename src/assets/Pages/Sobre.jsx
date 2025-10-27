import React from "react";
import Header from "../components/Header/Header";
import FooterSection from "../components/Footer/Footer";



export function Sobre(){
    return (
        <>
        <Header />
            <section class="sobre-container">
                <div class="sobre-bloco">
                    <h1>Sobre Nós</h1>
                    <h3>Transformando Treinos em Estilo de Vida</h3>
                    <p>Nascemos da paixão pelo movimento e da crença de que a roupa certa pode transformar não apenas seu treino, mas sua relação com o fitness. 
                        Somos mais do que uma loja de roupas esportivas – somos uma comunidade dedicada a empoderar cada pessoa em sua jornada de bem-estar e superação.</p>
                </div>

                <div class="sobre-bloco">
                    <h2>Nossa História</h2>
                    <p>Fundada por atletas e entusiastas do fitness, nossa marca surgiu da necessidade real de encontrar peças que unissem performance técnica, conforto absoluto e design inspirador. 
                        Cansados de escolher entre funcionalidade e estilo, decidimos criar a solução: roupas que acompanham cada movimento, desde o aquecimento até o pós-treino, sem abrir mão da estética.</p>
                </div>

                <div class="sobre-bloco">
                    <h2>Nossa Missão</h2>
                    <p>Acreditamos que cada pessoa merece se sentir confiante, confortável e motivada durante seus treinos. Por isso, 
                        desenvolvemos cada peça pensando nos mínimos detalhes: tecidos tecnológicos que respiram e se movem com você, 
                        costuras estratégicas que evitam atrito, modelagens que valorizam todos os corpos e cores que inspiram energia e determinação.</p>
                </div>

                <div class="sobre-bloco">
                    <h2>O Que Nos Torna Únicos</h2>
                    <ul>
                        <li><strong>Tecnologia de Ponta:</strong> Secagem rápida, proteção UV, respirabilidade e suporte muscular.</li>
                        <li><strong>Design para Performance:</strong> Cada detalhe pensado para liberdade máxima de movimento.</li>
                        <li><strong>Sustentabilidade:</strong> Materiais e processos eco-friendly.</li>
                        <li><strong>Inclusividade:</strong> Modelagens e tamanhos para todos os corpos e estilos.</li>
                    </ul>
                </div>

                <div class="sobre-bloco">
                    <h2>Nosso Compromisso</h2>
                    <p>Mais do que vender roupas, queremos fazer parte da sua transformação. Cada peça é testada exaustivamente por atletas reais em condições reais. Garantimos qualidade superior, durabilidade e a certeza de que você está investindo em produtos que acompanharão sua evolução.</p>

                    <p class="chamada-final"><strong>Junte-se a nós nessa jornada. Vista-se para vencer. Vista-se para ser você.</strong></p>
                </div>
            </section>

        <FooterSection />
        </>
    )
}