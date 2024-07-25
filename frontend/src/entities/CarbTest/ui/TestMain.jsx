import styled from "styled-components";
import TestContent from "./TestContent";
import icon from "../../../assets/pretzelIcon.svg";

export default function TestMain(){

    return(
    <Wrapper>

        <TitleContainer>
            <Icon src={icon}/>
            <div>자신에게 해당하는 질문에 체크하세요.</div>
        </TitleContainer>

        <TestContent/>

    </Wrapper>);
}

const Wrapper = styled.div`
background: #F2F3F5;
padding: 2.5rem 2rem 1.6rem 2rem;
`

const TitleContainer = styled.div`
display: flex;
align-items: center;
gap: 0.8rem;
color: var(--Gray8, #262829);
font-family: "Noto Sans KR";
font-size: 2rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`

const Icon=styled.img`
width: 3.2rem;
height: 3.2rem;
`