import styled from "styled-components";
import back from "../../../assets/BackButton.svg";
import { useNavigate } from "react-router-dom";

function Header(){

    const navigate = useNavigate(-1)

    return(
    <Wrapper>
        <Back src={back} onClick={()=>navigate('/')} alt="back" fetchPriority="high"/>
        <Title>탄수화물 중독 테스트</Title>
    </Wrapper>
    )
}

export default Header;

const Wrapper = styled.div`
    height: 5.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    position: relative
`

const Back = styled.img`
    width: 3.6rem;
    height: 3.6rem;
    position: absolute;
    left: 2rem;
    cursor: pointer;

`

const Title = styled.div`
color: var(--Gray8, #262829);
text-align: center;
font-family: "Noto Sans KR";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
`