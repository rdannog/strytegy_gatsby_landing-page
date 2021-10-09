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
    
    font-size: 1.2vw;
    font-family: 'Paralucent';
    font-weight: bold;
    text-transform: uppercase;
    margin-right: 2vw;
    cursor: pointer;
    &:hover{
        border-bottom: 3px solid;
    }
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
    opacity:0.7;
    &:hover{
        width:14vw;
        height: 8.5vh;
        transition: .4s ease;
        opacity:1;
    }
`
export const ButtonLang =styled.button`
    width:2.2vw;
    height: 5.3vh;
    font-size: 1vw;
    font-weight: bolder;
    text-transform: uppercase;
    border-radius: 50%;
    border: 1.5px solid;
    background: none;
    cursor: pointer;
    margin-right: 3vw;
    display:flex;
    align-items:center;
    justify-content:center;
`

/*export const  =styled.`
   
`*/