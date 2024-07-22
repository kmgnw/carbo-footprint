import styled from "styled-components";
import back from "../../../assets/BackButton.svg";

function Header(){
    return(
    <Wrapper>
        <Back src={back}/>
        <Title>탄수화물 함량 카운팅</Title>
    </Wrapper>
    )
}

export default Header;

const Wrapper = styled.div`
    height: 5.6rem;
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
`

const Back = styled.img`
    width: 3.6rem;
    height: 3.6rem;
`

const Title = styled.div`
color: var(--Gray8, #262829);
text-align: center;
font-family: "Noto Sans KR";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-left: 8.9rem;
`