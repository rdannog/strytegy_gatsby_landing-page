import React from 'react'
import * as S from './style'

export function Main({
    title,
    subtitle,
    start,
    background
}) {
    return (
        <S.Container>
            <S.IntroContainer style={{backgroundImage:`url(${background})`}}>
               <S.IntroContent>
                    <S.Title>
                        <h1>{title}</h1>
                    </S.Title>
                    <S.Subtitle>
                        <p>{subtitle}</p>
                    </S.Subtitle>
                    <S.ButtonStartContainer>
                        <S.ButtonStart>
                            {start}
                        </S.ButtonStart>
                    </S.ButtonStartContainer>
               </S.IntroContent>
            </S.IntroContainer>
            <section>
                <div>
                    <S.FeatureTitleContainer>
                        <S.FeatureTitle>
                            <h2>Strytegy é a nova evolução do ágil</h2>
                        </S.FeatureTitle>
                        <S.FeatureSubtitle>
                            <p>Construa projetos mais colaborativos de forma remota, focados em resultados. </p>
                            <p>Acesso ilimitado. Conheça os nossos recursos:</p>
                        </S.FeatureSubtitle>
                    </S.FeatureTitleContainer>
                    <div>
                        <S.LinksContainer>
                            <S.LinksMenu>
                                <S.MenuItem>
                                    <S.ItemContent>
                                        <S.ItemValue>Ao vivo e Colaborativo</S.ItemValue>
                                    </S.ItemContent>
                                </S.MenuItem>
                                <S.Division/>
                                <S.MenuItem>
                                    <S.ItemContent>
                                        <S.ItemValue>Biblioteca de Templates</S.ItemValue>
                                    </S.ItemContent>
                                </S.MenuItem>
                                <S.Division/>
                                <S.MenuItem>
                                    <S.ItemContent>
                                        <S.ItemValue>Áreas de trabalho e Projetos</S.ItemValue>
                                    </S.ItemContent>
                                </S.MenuItem>
                                <S.Division/>
                                <S.MenuItem>
                                    <S.ItemContent>
                                        <S.ItemValue>Exporte e Compartilhe</S.ItemValue>
                                    </S.ItemContent>

                                </S.MenuItem>
                            </S.LinksMenu>
                        </S.LinksContainer>
                        <S.ResourcesContainer>
                            <S.ResourceImageContainer>
                                <img src="./assets/img/feature-meeting-9cf50dd5f3776a598ae12991f992de91.gif" alt=""/>
                            </S.ResourceImageContainer>
                            <S.ResourceTextContainer>
                                <S.ResourceTitle>Ao vivo e Colaborativo</S.ResourceTitle>
                                <S.ResourceTextContainer>Trabalhar de forma remota ficou muito mais fácil. Nossos
                                    espaços colaborativos proporcionam maior integração e visualização das ideias em tempo
                                    real.
                                </S.ResourceTextContainer>
                            </S.ResourceTextContainer>
                        </S.ResourcesContainer>
                    </div>
                </div>
            </section>
        </S.Container>
    )
}