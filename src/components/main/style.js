import styled from "styled-components";

export const Container =styled.div`
    padding-top: 17vh;
`
export const IntroContainer =styled.section`
    width: 97%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-repeat: no-repeat;
    background-position: right;
    background-size: 50% auto;
`

export const IntroContent =styled.div`
    width: 55%;
    height: 80%;
    padding-left: 9vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const Title =styled.div`
height:55%;
    font-family: 'Paralucent';
    font-weight: bolder;
    font-size: 3.2vw;
`

export const Subtitle = styled.div`
    width: 75%;
    height:30%;
    font-family: 'Soleto';
    font-weight: lighter;
    font-size: 1.8vw;
`
export const ButtonStartContainer = styled.div`
    width: 100%;
    height: 10vh;
    padding-top:5vh;
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
export const FeatureTitleContainer =styled.div`
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top:8vh;
    background-image: linear-gradient(180deg, #FFFFFF, #FFFAE4 70%);
`

export const FeatureTitle =styled.div`
    height: 50%;
    font-family: 'Paralucent';
    font-size: 2.8vw;
    font-weight: bolder;
    display: flex;
    align-items: flex-end;
    
`
export const FeatureSubtitle =styled.div`
    height: 10%;
    font-family: 'Soleto';
    font-size: 1.7vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const LinksContainer =styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
`
export const LinksMenu =styled.div`
    width: 75vw;
    height: 17vh;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0px 0px 20px #00000014;
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
`
export const MenuItem =styled.a`
    width: 24%;
    height:85%;
`
export const ItemContent =styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        font-weight: 600;
        background-color: #FFCE06;
        border-radius: 5px;
        cursor: pointer;
    }
`
export const Division =styled.div`
    width: 0.2%;
    height: 40%;
    background-color: #22254B;
`
export const ItemValue =styled.p`
    width: 90%;
    font-family: 'Paralucent';
    font-size: 1.6vw;
    text-align: center;
`
export const ResourcesContainer =styled.div`
    height: 63vh;
    background-color: #22254B;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 8.5vh;
`
export const ResourceImageContainer =styled.figure`
    width:34vw;
    margin-right: 5.5vw;
`
export const ResourceImage = styled.img`
    width: 33vw;
    height: 40vh;
`
export const ResourceTextContainer =styled.div`
    width:26vw;
`
export const ResourceTitle =styled.h2`
    color: #fff;
    font-family: 'Paralucent';
    font-size: 3vw;
`
export const ResourceText =styled.p`
    color: #fff;
    font-family: 'Soleto';
    font-size: 1.3vw;
    padding-bottom:4vh;
`
export const JourneyContainer =styled.section`
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
export const JourneyImage =styled.img`
    width: 28vw;
`
export const JourneyText =styled.div`
    width: 46%;
`
export const JourneyTitle =styled.h2`
    font-family: 'Paralucent';
    font-size: 4.3vw;
`
export const JourneySubtitle =styled.p`
    font-family: 'Soleto';
    font-size: 1.8vw;
`
export const StrytegyContainer =styled.section`
    width: 100%;
`
export const IntroTextContainer =styled.div`
    height: 80vh;
    background-color: #22254B;
    display: flex;
    justify-content: center;
`
export const TextContainer =styled.div`
    width:54%;
    height: 100%;
    text-align: center;
    margin-bottom: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`
export const TitleStrytegy =styled.h2`
    color: #fff;
    font-family: 'Paralucent';
    font-size: 4.1vw;
    font-weight: bolder;
    margin-bottom: 4vh;
`
export const TextStrytegy =styled.p`
    color: #fff;
    font-family: 'Soleto';
    font-size: 1.7vw;
    font-weight: lighter;
    margin-bottom: 18vh;
`
export const GridWrapper =styled.section`
    width: 100%;
    height: 88vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
`
export const Grid =styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    bottom: 20vh;
`
export const GridContent =styled.div`
    width: 22vw;
    height: 49.5vh;
    font-family: 'Soleto';
    font-size: 1.1vw;
    border: 2px solid #22254B;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    align-items: center;
    &:hover{
        transform: scale(1.02);
    }
`

export const GridItem =styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    p{
        text-align: center;
        width: 17vw;
    }
    img{
        width: 12vw;
        margin-top:5vh;
    }
`
/*export const  =styled.`
   
`*/