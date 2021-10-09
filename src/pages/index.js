import React from "react"
import { graphql } from "gatsby"
import { Header } from "../components/header"
import { Main } from "../components/main"
import { GlobalStyle } from "./style"

export const query = graphql`
  query {
    alldata {
      projects{
        btnBlog
        btnEnter
        btnFaq
        btnLang
        btnStart
        introBottomSubtitle1
        introBottomSubtitle2
        introBottomTitle
        itemValue1
        itemValue2
        itemValue3
        itemValue4
        resourceSubtitle
        resourceTitle
        stage
        subtitle
        title
        resourceImage {
          url
        }
        journeyImage {
          url
        }
        journeySubtitle1
        journeySubtitle2
        journeyTitle
        logo {
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
      />
    </div>

  )
}
