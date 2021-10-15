import React from 'react'
import * as S from './style'

export function Main({
    title,
    subtitle,
    start,
    background,
    bottomTitle,
    bottomSubtitle1,
    bottomSubtitle2,
    itemValue1,
    itemValue2,
    itemValue3,
    itemValue4,
    resourceImage,
    resourceTitle,
    resourceSubtitle,
    journeyImage,
    journeyTitle,
    journeySubtitle1,
    journeySubtitle2,
    strytegySubtitle,
    strytegyTitle,
    gridImage1,
    gridImage2,
    gridImage3,
    gridItem1,
    gridItem2,
    gridItem3,
    gridItem4,
    gridItem5,
    gridItem6,
    dataTitle,
    dataImage,
    listItem1,
    listItem2,
    listItem3,
    usersTitle,
    userName,
    userCompany,
    userComment,
    userIcon
}) {
    return (
        <S.Container>
            <S.IntroContainer style={{backgroundImage:`url(${background})`}}>
               <S.IntroContent>
                    <S.Title>
                        <h1>{title}</h1>
                    </S.Title>
                    <S.Subtitle>
                        <p>{subtitle}</p>
                    </S.Subtitle>
                    <S.ButtonStartContainer>
                        <S.ButtonStart>
                            {start}
                        </S.ButtonStart>
                    </S.ButtonStartContainer>
               </S.IntroContent>
            </S.IntroContainer>
            <section>
                <div>
                    <S.FeatureTitleContainer>
                        <S.FeatureTitle>
                            <h2>{bottomTitle}</h2>
                        </S.FeatureTitle>
                        <S.FeatureSubtitle>
                            <span>{bottomSubtitle1}</span>
                            <span>{bottomSubtitle2}</span>
                        </S.FeatureSubtitle>
                    </S.FeatureTitleContainer>
                    <div>
                        <S.LinksContainer>
                            <S.LinksMenu>
                                <S.MenuItem>
                                    <S.ItemContent>
                                        <S.ItemValue>{itemValue1}</S.ItemValue>
                                    </S.ItemContent>
                                </S.MenuItem>
                                <S.Division/>
                                <S.MenuItem>
                                    <S.ItemContent>
                                        <S.ItemValue>{itemValue2}</S.ItemValue>
                                    </S.ItemContent>
                                </S.MenuItem>
                                <S.Division/>
                                <S.MenuItem>
                                    <S.ItemContent>
                                        <S.ItemValue>{itemValue3}</S.ItemValue>
                                    </S.ItemContent>
                                </S.MenuItem>
                                <S.Division/>
                                <S.MenuItem>
                                    <S.ItemContent>
                                        <S.ItemValue>{itemValue4}</S.ItemValue>
                                    </S.ItemContent>
                                </S.MenuItem>
                            </S.LinksMenu>
                        </S.LinksContainer>
                        <S.ResourcesContainer>
                            <S.ResourceImageContainer>
                                <S.ResourceImage src={resourceImage} alt=""/>
                            </S.ResourceImageContainer>
                            <S.ResourceTextContainer>
                                <S.ResourceTitle>{resourceTitle}</S.ResourceTitle>
                                <S.ResourceText>{resourceSubtitle}</S.ResourceText>
                            </S.ResourceTextContainer>
                        </S.ResourcesContainer>
                    </div>
                </div>
            </section>
            <S.JourneyContainer>
                <S.JourneyImage src={journeyImage} alt=""/>
                <S.JourneyText>
                    <S.JourneyTitle>{journeyTitle}</S.JourneyTitle>
                    <S.JourneySubtitle>{journeySubtitle1} <br/>{journeySubtitle2}</S.JourneySubtitle>
                </S.JourneyText>
            </S.JourneyContainer>
            <S.StrytegyContainer>
                <S.IntroTextContainer>
                    <S.TextContainer>
                        <S.TitleStrytegy>{strytegyTitle}</S.TitleStrytegy>
                        <S.TextStrytegy>{strytegySubtitle}</S.TextStrytegy>
                    </S.TextContainer>
                </S.IntroTextContainer>
                <S.GridWrapper>
                    <S.Grid>
                        <S.GridContent>
                            <S.GridItem style={{height: "48.5vh"}}>
                                <img src={gridImage1} alt=""/>
                                <p>
                                    <b>Startups</b>{gridItem1.substring(8)}
                                </p>
                            </S.GridItem>
                        </S.GridContent>
                        <S.GridContent style={{height: "31.4vh"}}>
                            <S.GridItem>
                                <p>
                                <b>Freelancers and self-employed</b>{gridItem2.substring(29)}
                                </p>
                            </S.GridItem>
                        </S.GridContent>
                        <S.GridContent style={{height: "48.5vh"}}>
                            <S.GridItem>
                                <img src={gridImage2} alt=""/>
                                <p>
                                    <b>Professionals and teams</b>{gridItem3.substring(23)}
                                </p>
                            </S.GridItem>
                        </S.GridContent>
                        <S.GridContent style={{height: "31.4vh", position: "relative", top: "3vh"}}>
                            <S.GridItem>
                                <p>
                                    <b>Managers</b>{gridItem4.substring(8)}
                                </p>
                            </S.GridItem>
                        </S.GridContent>
                        <S.GridContent style={{height: "48.5vh", position: "relative", bottom:"13vh"}}>
                            <S.GridItem>
                                <img src={gridImage3} alt=""/>
                                <p>
                                 <b>Agile Squads and remote workers</b>{gridItem5.substring(31)}
                                </p>
                            </S.GridItem>
                        </S.GridContent>
                        <S.GridContent style={{height: "31.4vh", position: "relative", top: "3vh"}}>
                            <S.GridItem>
                                <p>
                                    <b>Business founders</b>{gridItem6.substring(17)}
                                </p>
                            </S.GridItem>
                        </S.GridContent>
                    </S.Grid>
                </S.GridWrapper>
                <S.BlankSpace/>
                <S.DataContainer>
                    <h2>{dataTitle}</h2>
                    <img style={{width:"60vw"}} src={dataImage} alt=""/>
                </S.DataContainer>
                <S.List>
                    <ul>
                        <li>
                            {listItem1}
                        </li>
                        <li>
                            {listItem2}
                        </li>
                        <li>
                            {listItem3}
                        </li>
                    </ul>
                </S.List>
                <S.UsersContainer>
                    <S.UsersTitle> {usersTitle} </S.UsersTitle>
                    <S.UsersComment>
                        <p style={{width:"75%", textAlign:"center"}}>"{userComment}" </p>
                        <S.UserInfo>
                            <div>
                                <img style={{width:"4.5vw", height:"11vh", borderRadius:"50%"}} src={  userIcon} alt=""/>
                            </div>
                            <div>
                                <h3>{userName}</h3>
                                <p>{userCompany}</p>
                            </div>
                        </S.UserInfo>
                    </S.UsersComment>
                    
                </S.UsersContainer>
                <div style={{backgroundColor: "rgb(236,231,247)"}}>
                        <svg viewBox="0 150 1440 120"><defs><filter id="wavy.inline" x="0" y="0" width="1461" height="266.3" filterUnits="userSpaceOnUse"><feOffset dy="6" input="SourceAlpha"></feOffset><feGaussianBlur stdDeviation="3.5" result="blur"></feGaussianBlur><feFlood flood-opacity="0.078"></feFlood><feComposite operator="in" in2="blur"></feComposite><feComposite in="SourceGraphic"></feComposite></filter></defs><g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#wavy.inline)"><path id="wavy.inline-2" data-name="wavy.inline" d="M0,160l80,21.3c80,21.7,240,63.7,400,64,160-.3,320-42.3,480-58.6,160-15.7,320-5.7,400,0l80,5.3V0H0Z" fill="#22254B"></path></g></svg>
                </div>
            </S.StrytegyContainer>
        </S.Container>
    )
}