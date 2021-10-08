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
        btnFaq
        btnEnter
        btnLang
        btnStart
        title
        subtitle
        logo {
          url
        }
        backgroundHeader {
          url
        }
      }
    }
  }
`
export default function Index ({ data }) {
  return (
    <div>
      {console.log(data)}
      <GlobalStyle/>
      <Header
        logo={data.alldata.projects[0].logo.url}
        blog={data.alldata.projects[0].btnBlog}
        faq={data.alldata.projects[0].btnFaq}
        enter={data.alldata.projects[0].btnEnter}
        lang={data.alldata.projects[0].btnLang}
      />
      <Main
        title={data.alldata.projects[0].title}
        subtitle={data.alldata.projects[0].subtitle}
        start={data.alldata.projects[0].btnStart}
        background={data.alldata.projects[0].backgroundHeader.url}
      />
    </div>

  )
}
