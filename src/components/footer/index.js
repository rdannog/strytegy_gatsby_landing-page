import React from 'react'
import * as S from './style'

export function Footer({
    
}) {
    return (
        <footer style={{backgroundColor:"rgb(236, 231, 247)"}}>
           <section class="footer__section--contact-wrapper">
                <div class="footer__contact--title">
                    <h2>Colabore remotamente</h2>
                </div>
                <div class="footer__contact--text">
                    <div class="footer__text">
                        <p>Nós queremos ser o parceiro preferencial em seu próximo grande passo. Convide seu time, parceiros e stakeholders para criar projetos e gerar resultados de uma forma descomplicada, intuitiva e amigável.</p>
                    <p>E tudo isso com acesso gratuito.</p>
                    </div>
                </div>
                <div class="footer__contact--button">
                    <button class="footer__button">Crie agora!</button>
                </div>
            </section>
            <section class="footer__section--about-wrapper">
                <div class="footer__about">
                    <div class="footer__about--title">
                        <h2>Sobre nós</h2>
                    </div>
                    <div class="footer__about--text">
                        <p>O Strytegy foi formado há alguns anos com o objetivo de responder a esta pergunta: O que separa as iniciativas bem-sucedidas das muitas que fracassam?</p>
                    </div>
                    <div class="footer__about-logo">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MCIgaGVpZ2h0PSI5MCIgdmlld0JveD0iMCAwIDkwIDkwIj48cmVjdCB3aWR0aD0iOTAiIGhlaWdodD0iOTAiIHJ4PSIxLjIiIGZpbGw9IiNjYWFhZTUiLz48cGF0aCBkPSJNMjMuMTYsNTguNjZsMi03LjY3YzYuNjQsNC41NCwxMy40NCw2LjQzLDIzLjExLDYuNDMsNy40NSwwLDkuNjYtMi4yMiw5LjY2LTQuMzgsMC00LjI2LTctMy44OC0xNC41OC00LjE1LTEzLS40My0xOS4xNi00LjU0LTE5LjE2LTEyLjQyLDAtOC4xNSw3LjgyLTExLjcyLDE4LjczLTExLjcyLDksMCwxNi42MywyLDIzLDYuNDNMNjQsMzljLTYuMjEtNC40Mi0xNC44NS02LjM3LTIzLTYuMzctNC4xNiwwLTcuODksMS4wOC03Ljg5LDMuODksMCwzLjI5LDQsNC4yMSwxMi40Miw0LjM3LDExLjc3LjIyLDIxLjMzLDIuMjcsMjEuMzMsMTIuMiwwLDguMDUtOC4zNywxMi4yMS0yMC4xOSwxMi4yMUMzNi44Nyw2NS4yNSwyNy41Myw2Mi40OSwyMy4xNiw1OC42NloiIGZpbGw9IiMyMjI1NGIiLz48L3N2Zz4=" alt="strytegy logo" />
                        <p>© 2021 Strytegy</p>
                    </div>
                    <div class="footer__about-company">
                        <p>ISTI Soluções em Tecnologia Ltda</p>
                        <p>CNPJ: 13.475.139/0001-33</p>
                    </div>
                </div>
                <div class="footer__list">
                    <div class="footer__list-wrapper">
                        <h2>Social</h2>
                        <ul>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                    <div class="footer__list-wrapper">
                        <h2>Ajuda</h2>
                        <ul>
                            <li>FAQ</li>
                            <li>Termos de Uso</li>
                            <li>Políticas de Privacidade</li>
                            <li>Suporte</li>
                        </ul>
                    </div>
                </div>
            </section>
            
        </footer>
    )
}