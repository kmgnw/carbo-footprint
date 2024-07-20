import styled from "styled-components";
import test from "../../../assets/testImg.svg";

function Banner(){
    return(
    <Wrapper>
        <Content>
            당신의 식단 속<br/>탄수화물은<br/>얼마나 포함되어 있을까요?<br/>
        </Content>
        <Img src={test}/>
    </Wrapper>
    )
}

export default Banner;

const Wrapper = styled.div`
    width: 100%;
    height: 12rem;
    background: var(--Primary-color1, #EF6038);
    padding : 0 2rem 0 2rem;
    display: flex;
`

const Content = styled.div`
    width: 17.8rem;
    color: var(--White, #FFF);
font-family: "Noto Sans KR";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 24px */
padding-top: 2.4rem;
`

const Img = styled.img`
    width: 8rem;
    height: 8rem;
    margin: 2rem 0 0 13.2rem;
`