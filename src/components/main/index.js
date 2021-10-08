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
        </S.Container>
    )
}