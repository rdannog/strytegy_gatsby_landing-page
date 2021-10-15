import React from 'react'
import * as S from './style'

export function Footer({
    footerBlog,
    footerCopyright,
    footerFace,
    footerFaq,
    footerInsta,
    footerLink,
    footerListTitle1,
    footerListTitle2,
    footerName,
    footerNumber,
    footerPrivacy,
    footerSubtitle,
    footerSupport,
    footerTerms,
    footerTitle,
    collabButton,
    collabText1,
    collabText2,
    collabTitle
}) {
    return (
        <S.Container>
           <S.Contact>
                <S.ContactTitle>
                    <h2>{collabTitle}</h2>
                </S.ContactTitle>
                <S.ContactText>
                    <div>
                        <p>{collabText1}</p>
                        <p>{collabText2}</p>
                    </div>
                </S.ContactText>
                <S.ContactButton>
                    <button>{collabButton}</button>
                </S.ContactButton>
            </S.Contact>
            <S.AboutContainer>
                <S.AboutText>
                    <S.AboutTitle>
                        <h2>{footerTitle}</h2>
                    </S.AboutTitle>
                    <S.AboutParagraph>
                        <p>{footerSubtitle}</p>
                    </S.AboutParagraph>
                    <S.AboutLogo>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MCIgaGVpZ2h0PSI5MCIgdmlld0JveD0iMCAwIDkwIDkwIj48cmVjdCB3aWR0aD0iOTAiIGhlaWdodD0iOTAiIHJ4PSIxLjIiIGZpbGw9IiNjYWFhZTUiLz48cGF0aCBkPSJNMjMuMTYsNTguNjZsMi03LjY3YzYuNjQsNC41NCwxMy40NCw2LjQzLDIzLjExLDYuNDMsNy40NSwwLDkuNjYtMi4yMiw5LjY2LTQuMzgsMC00LjI2LTctMy44OC0xNC41OC00LjE1LTEzLS40My0xOS4xNi00LjU0LTE5LjE2LTEyLjQyLDAtOC4xNSw3LjgyLTExLjcyLDE4LjczLTExLjcyLDksMCwxNi42MywyLDIzLDYuNDNMNjQsMzljLTYuMjEtNC40Mi0xNC44NS02LjM3LTIzLTYuMzctNC4xNiwwLTcuODksMS4wOC03Ljg5LDMuODksMCwzLjI5LDQsNC4yMSwxMi40Miw0LjM3LDExLjc3LjIyLDIxLjMzLDIuMjcsMjEuMzMsMTIuMiwwLDguMDUtOC4zNywxMi4yMS0yMC4xOSwxMi4yMUMzNi44Nyw2NS4yNSwyNy41Myw2Mi40OSwyMy4xNiw1OC42NloiIGZpbGw9IiMyMjI1NGIiLz48L3N2Zz4=" alt="strytegy logo" />
                        <p>{footerCopyright}</p>
                    </S.AboutLogo>
                    <S.AboutCompany>
                        <p>{footerName}</p>
                        <p>{footerNumber}</p>
                    </S.AboutCompany>
                </S.AboutText>
                <S.FooterListWrapper>
                    <S.FooterList>
                        <h2>{footerListTitle1}</h2>
                        <ul>
                            <li>{footerInsta}</li>
                            <li>{footerFace}</li>
                            <li>{footerLink}</li>
                            <li>{footerBlog}</li>
                        </ul>
                    </S.FooterList>
                    <S.FooterList>
                        <h2>{footerListTitle2}</h2>
                        <ul>
                            <li>{footerFaq}</li>
                            <li>{footerTerms}</li>
                            <li>{footerPrivacy}</li>
                            <li>{footerSupport}</li>
                        </ul>
                    </S.FooterList>
                </S.FooterListWrapper>
            </S.AboutContainer>
            
        </S.Container>
    )
}