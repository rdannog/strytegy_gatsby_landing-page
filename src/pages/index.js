import React from "react"
import { graphql } from "gatsby"
import { Header } from "../components/header"
import { Main } from "../components/main"
import { GlobalStyle } from "./style"

export const query = graphql`
  query {
    completedata {
      projects{
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
      }
    }
  }
`
export default function Index ({ data }) {
  const dataMain = data.completedata.projects[0]
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
      />
    </div>

  )
}
