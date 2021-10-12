import styled from "styled-components";

export const Container  =styled.footer`
   background-color:rgb(236, 231, 247);
   color: #22254B;
`
export const Contact  =styled.section`
    height: 90vh;
    div{
        height: 33.3%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`
export const ContactTitle  =styled.div`
    font-family: 'Paralucent';
    font-weight: bold;
    font-size: 2.7vw;
    justify-content: flex-end;
`
export const ContactText  =styled.div`
    width: 100%;
    div{
        width: 55%;
        font-family: 'Soleto';
        font-weight: 100;
        font-size: 1.7vw;
        text-align: center;
        p{
            margin:0;
        }
    }
`
export const ContactButton  =styled.div`
    justify-content: flex-start;
    button{
        width: 16.5vw;
        height: 9.1vh;
        background-color: #FFCE06;
        color: #22254B;
        border: #FFCE06;
        border-radius: 5px;
        font-size: 1.5vw;
        font-weight: bolder;
        &:hover{
            width:17.5vw;
            height: 10vh;
        }
    }
`
export const AboutContainer  =styled.section`
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-top: 0.2px solid lightgray;
`
export const AboutText  =styled.div`
    width: 35vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const AboutTitle  =styled.div`
    font-size: 1vw;
    font-family: 'Paralucent';
    font-weight: bolder;
`
export const AboutParagraph  =styled.div`
    font-size: 1.1vw;
    font-family: 'Soleto';
    font-weight: 100;
`
export const AboutLogo  =styled.div`
    font-size: 1.3vw;
    font-family: 'Paralucent';
    display: flex;
    align-items: center;
    img{
        width:4vw; 
        height:8.3vh;
        margin-right: 1.5vw;
    }
`
export const AboutCompany  =styled.div`
    font-size: 0.9vw;
    font-family: 'Soleto';
    text-transform: uppercase;
`
export const FooterListWrapper  =styled.section`
    width: 30vw;
    height:42vh;
    display: flex;
`
export const FooterList  =styled.section`
    width: 50%;
    display:flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items:flex-start;
    h2{
        font-size: 1.5vw;
        font-family: 'Paralucent';
        font-weight: bolder;
    }
    ul{
        padding:0;
        margin:0;
        list-style:none;
    }
    li{
        font-size: 1.1vw;
        font-family: 'Soleto';
        font-weight: 100;
        margin-top: 1vh;
        cursor: pointer;
    }
`