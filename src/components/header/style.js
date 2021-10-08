import styled from "styled-components";

export const Container= styled.div`
    width:100%;
    height: 12.4vh;
    background-color: #fff;
    box-shadow: 0 3px 10px #0000001A;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    z-index: 999;

`
export const LogoContainer = styled.figure`
    margin-left: 9.2vw;
`
export const Logo = styled.img`
    width: 11vw;
    cursor: pointer;
`
export const Navigation =styled.nav`
    width: 32%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
export const ButtonBlogFaq =styled.a`
    width:3vw;
    font-size: 1.55vw;
    font-family: 'Paralucent';
    font-weight: bold;
    text-transform: uppercase;
    margin-right: 1.5vw;
    cursor: pointer;
`
export const ButtonEnterContainer =styled.span`
    width: 14.8vw;
    display: flex;
    align-items: center;
`
export const ButtonEnter =styled.button`
    width:14vw;
    height: 7.5vh;
    font-size: 1.4vw;
    font-weight: 600;
    text-transform: capitalize;
    background-color: #FFCE06;
    border-radius: 5px;
    border:#FFCE06;
    cursor: pointer;
    color:#25294C;
    &:hover{
        width:14.8vw;
        height: 8.5vh;
        transition: .4s ease;
    }
`
export const ButtonLang =styled.button`
    width:2.5vw;
    height: 4.4vh;
    font-size: 1.1vw;
    font-weight: bolder;
    text-transform: uppercase;
    border-radius: 50%;
    border: 1.5px solid;
    background: none;
    cursor: pointer;
    margin-right: 3vw;
`

/*export const  =styled.`
   
`*/