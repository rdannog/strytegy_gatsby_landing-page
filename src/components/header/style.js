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
    @media screen and (max-width: 480px) {
        height: 4rem;
        nav{
            height:100%;
            background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNS41NjQiIGhlaWdodD0iOC43NTciIHZpZXdCb3g9IjAgMCAxNS41NjQgOC43NTciPjxkZWZzPjxzdHlsZT4uYXtmaWxsOiMyMjI1NGI7fTwvc3R5bGU+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE1LjU2NCAtMzIuMTIyKSByb3RhdGUoOTApIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMi4xNTQgNi44MzMpIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwKSI+PHBhdGggY2xhc3M9ImEiIGQ9Ik0yNzkuNDUxLDIzMi41MTJsLTUuNzc1LDUuNzc2LS44MTkuODE5YTEuMDc0LDEuMDc0LDAsMSwwLDEuNTE5LDEuNTE5bDUuNzc1LTUuNzc2LjgxOS0uODE5YTEuMSwxLjEsMCwwLDAsMC0xLjUxOSwxLjA4MSwxLjA4MSwwLDAsMC0xLjUxOSwwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI3Mi41NSAtMjMyLjIpIi8+PC9nPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMi4xMjIgMCkiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiPjxwYXRoIGNsYXNzPSJhIiBkPSJNMjgwLjE2OSw2OC4xNTFsLTUuNzc1LTUuNzc2LS44MTktLjgxOWExLjA3NCwxLjA3NCwwLDAsMC0xLjUxOSwxLjUxOWw1Ljc3NSw1Ljc3Ni44MTkuODE5YTEuMSwxLjEsMCwwLDAsMS41MTksMCwxLjA4MSwxLjA4MSwwLDAsMCwwLTEuNTE5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI3MS43NSAtNjEuMjUpIi8+PC9nPjwvZz48L2c+PC9zdmc+");
            background-repeat: no-repeat;
            background-position: 70% center;
        }
        a, span, button{
            display:none;
        }
        
    }
`
export const LogoContainer = styled.figure`
    margin-left: 9.2vw;
`
export const Logo = styled.img`
    width: auto;
    height:1.875rem;
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