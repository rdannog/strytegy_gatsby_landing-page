import React from 'react'
import * as S from './style'

export function Header({
    logo,
    blog,
    faq,
    enter, 
    lang
}) {
    return (
        <S.Container>
            <S.LogoContainer>
                <S.Logo src={logo} alt=""/>
            </S.LogoContainer>
            <S.Navigation>
                <S.ButtonBlogFaq>
                    {blog}
                </S.ButtonBlogFaq>
                <S.ButtonBlogFaq>
                    {faq}
                </S.ButtonBlogFaq>
                <S.ButtonEnterContainer>
                    <S.ButtonEnter>{enter}</S.ButtonEnter>
                </S.ButtonEnterContainer>
                <S.ButtonLang>{lang}</S.ButtonLang>
            </S.Navigation>
        </S.Container>
    )
}
