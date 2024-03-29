import React from "react"
import { graphql } from "gatsby"
import { Header } from "../components/header"
import { Main } from "../components/main"
import { Footer } from "../components/footer"
import { createGlobalStyle } from "styled-components";
import Soleto from "../fonts/Soleto-Regular/Soleto-Regular.ttf"
import Paralucent from "../fonts/Paralucent/Paralucent.ttf"

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "Soleto";
    src: url(${Soleto});
  }
@font-face {
    font-family: "Paralucent";
    src: url(${Paralucent});
}
body{
    padding:0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    color: #25294C;
    cursor: default;
}
&::-webkit-scrollbar {
    width: 8px;
}
&::-webkit-scrollbar-track {
    background: #f1f1f1; 
}
&::-webkit-scrollbar-thumb {
    background: rgb(187, 184, 184); 
}
`

export const query = graphql`
  query {
    alldata {
      projects {
        backgroundHeader {
          url
        }
        btnBlog
        btnEnter
        btnFaq
        btnLang
        btnStart
        gridImage1 {
          url
        }
        gridImage2 {
          url
        }
        gridImage3 {
          url
        }
        gridItem1
        gridItem2
        gridItem3
        gridItem4
        gridItem5
        gridItem6
        introBottomSubtitle1
        introBottomSubtitle2
        introBottomTitle
        itemValue1
        itemValue2
        itemValue3
        itemValue4
        journeyImage {
          url
        }
        journeySubtitle1
        journeySubtitle2
        journeyTitle
        logo {
          url
        }
        resourceImage {
          url
        }
        resourceSubtitle
        resourceTitle
        strytegySubtitle
        strytegyTitle
        subtitle
        title
        collabButton
        collabText1
        collabText2
        collabTitle
        dataTitle
        dataImage {
          url
        }
        footerBlog
        footerCopyright
        footerFace
        footerFaq
        footerInsta
        footerLink
        footerListTitle1
        footerListTitle2
        footerName
        footerNumber
        footerPrivacy
        footerSubtitle
        footerSupport
        footerTerms
        footerTitle
        listItem1
        listItem2
        listItem3
        usersTitle
        userName
        userCompany
        userComment
        userIcon {
          url
        }
      }
    }
  }
`
export default function Index ({ data }) {
  const dataMain = data.alldata.projects[0]
  return (
    <div>
      {console.log(data)}
      <GlobalStyle/>
      <Header
        logo={dataMain.logo.url}
        blog={dataMain.btnBlog}
        faq={dataMain.btnFaq}
        enter={dataMain.btnEnter}
        lang={dataMain.btnLang}
      />
      <Main
        title={dataMain.title}
        subtitle={dataMain.subtitle}
        start={dataMain.btnStart}
        background={dataMain.backgroundHeader.url}
        bottomTitle={dataMain.introBottomTitle}
        bottomSubtitle1={dataMain.introBottomSubtitle1}
        bottomSubtitle2={dataMain.introBottomSubtitle2}
        itemValue1={dataMain.itemValue1}
        itemValue2={dataMain.itemValue2}
        itemValue3={dataMain.itemValue3}
        itemValue4={dataMain.itemValue4}
        resourceImage={dataMain.resourceImage.url}
        resourceTitle = {dataMain.resourceTitle}
        resourceSubtitle = {dataMain.resourceSubtitle}
        journeyImage={dataMain.journeyImage.url}
        journeySubtitle1={dataMain.journeySubtitle1}
        journeySubtitle2={dataMain.journeySubtitle2}
        journeyTitle={dataMain.journeyTitle}
        strytegySubtitle={dataMain.strytegySubtitle}
        strytegyTitle={dataMain.strytegyTitle}
        gridImage1={dataMain.gridImage1.url}
        gridImage2={dataMain.gridImage2.url}
        gridImage3={dataMain.gridImage3.url}
        gridItem1={dataMain.gridItem1}
        gridItem2={dataMain.gridItem2}
        gridItem3={dataMain.gridItem3}
        gridItem4={dataMain.gridItem4}
        gridItem5={dataMain.gridItem5}
        gridItem6={dataMain.gridItem6}
        dataTitle={dataMain.dataTitle}
        dataImage={dataMain.dataImage.url}
        listItem1={dataMain.listItem1}
        listItem2={dataMain.listItem2}
        listItem3={dataMain.listItem3}
        usersTitle={dataMain.usersTitle}
        userName={dataMain.userName}
        userCompany={dataMain.userCompany}
        userComment={dataMain.userComment}
        userIcon={dataMain.userIcon.url}
      />
      <Footer 
        footerBlog={dataMain.footerBlog}
        footerCopyright={dataMain.footerCopyright}
        footerFace={dataMain.footerFace}
        footerFaq={dataMain.footerFaq}
        footerInsta={dataMain.footerInsta}
        footerLink={dataMain.footerLink}
        footerListTitle1={dataMain.footerListTitle1}
        footerListTitle2={dataMain.footerListTitle2}
        footerName={dataMain.footerName}
        footerNumber={dataMain.footerNumber}
        footerPrivacy={dataMain.footerPrivacy}
        footerSubtitle={dataMain.footerSubtitle}
        footerSupport={dataMain.footerSupport}
        footerTerms={dataMain.footerTerms}
        footerTitle={dataMain.footerTitle}
        collabButton={dataMain.collabButton}
        collabText1={dataMain.collabText1}
        collabText2={dataMain.collabText2}
        collabTitle={dataMain.collabTitle}
      />
    </div>

  )
}
