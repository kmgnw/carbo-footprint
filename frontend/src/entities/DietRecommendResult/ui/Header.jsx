import styled from "styled-components";
import back from "../../../assets/BackButton.svg";
import { useNavigate } from "react-router-dom";

function Header(){

    const navigate = useNavigate(-1)

    return(
    <Wrapper>
        <Back
        src={back}
        onClick={()=>navigate(-1)}
        />
        <Title>식단 추천</Title>
        <Back
        src={back}
        style={{visibility:'hidden'}}
        />
    </Wrapper>
    )
}

export default Header;

const Wrapper = styled.div`
    height: 5.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
`

const Back = styled.img`
    width: 3.6rem;
    height: 3.6rem;
`

const Title = styled.div`
color: #262829;
text-align: center;
font-family: "Noto Sans KR";
font-size: 1.6rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`