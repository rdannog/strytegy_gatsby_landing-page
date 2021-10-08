import styled from "styled-components";

export const Container =styled.div`
    padding-top: 17vh;
`
export const IntroContainer =styled.section`
    width: 97%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-repeat: no-repeat;
    background-position: right;
    background-size: 50% auto;
`

export const IntroContent =styled.div`
    width: 55%;
    height: 100%;
    padding-left: 9vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const Title =styled.div`
    font-family: 'Paralucent';
    font-weight: bolder;
    font-size: 3.2vw;
    margin-bottom: 5vh;
`

export const Subtitle = styled.div`
    width: 80%;
    font-family: 'Soleto';
    font-size: 1.8vw;
    margin-bottom: 2vh;
`
export const ButtonStartContainer = styled.div`
    width: 100%;
    height: 10vh;
    padding-top: 3vh;
    
`

export const ButtonStart = styled.button`
    width:16.5vw;
    height: 9vh;
    margin-top:5vh;
    font-family: 'Soleto';
    font-size: 1.4vw;
    font-weight: 600;
    text-transform: capitalize;
    background-color: #FFCE06;
    border-radius: 5px;
    border:#FFCE06;
    color:#25294C;
    cursor: pointer;
    &:hover{
        width:17.5vw;
        height: 9.5vh;
        transition: .4s ease;
    }
`



/*export const  =styled.`
   
`*/