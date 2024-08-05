import styled from "styled-components";
import logo from "../assets/loginLogo.svg";
import StandardButton from "../shared/components/StandardButton/StandardButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleRegister } from "../entities/Register/api/Rejister";

function Register() {
    const [loginId, setLoginId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const onRegisterClick = async () => {
        await handleRegister(loginId, password, setError, navigate);
    };

    return (
        <Wrapper>
            <Title>회원가입</Title>
            <Logo src={logo} fetchPriority="high" alt="logo"/>
            <Container style={{ height: "10rem" }}>
                <div>아이디</div>
                <Input
                    placeholder="아이디를 입력해주세요"
                    error={!!error}
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)}
                />
                {error && <Warning>{error}</Warning>}
            </Container>
            <Container style={{ marginTop: "2.4rem", marginBottom: "4rem", height: "10rem" }}>
                <div>비밀번호</div>
                <Input
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Container>
            <StandardButton
                title="회원가입"
                width="100%"
                height="4.8rem"
                onClick={onRegisterClick} 
            />
            <RegisterContent>
                이미 회원이신가요? &nbsp;&nbsp;
                <Span
                    style={{ color: "#262829", fontWeight: "700" }}
                    onClick={() => navigate('/login')}
                >
                    로그인하기
                </Span>
            </RegisterContent>
        </Wrapper>
    );
}

export default Register;


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
`;

const Title = styled.div`
    color: var(--Gray8, #262829);
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 1.6rem;
    font-weight: 700;
    line-height: normal;
    margin-top: 2.1rem;
`;

const Logo = styled.img`
    margin-top: 8.1rem;
    margin-bottom: 6.7rem;
`;

const Container = styled.div`
    display: flex;
    width: 100%;
    color: var(--Gray8, #262829);
    font-family: "Pretendard Variable";
    font-size: 1.6rem;
    font-weight: 700;
    line-height: normal;
    flex-direction: column;
    gap: 0.8rem;
`;

const Input = styled.input`
    display: flex;
    height: 4.8rem;
    padding: 1.4rem 1.8rem;
    align-items: center;
    gap: 1rem;
    align-self: stretch;
    border-radius: 8px;
    border: 1px solid ${props => (props.error ? "#FF6464" : "var(--Gray2, #E3E5E7)")};
    &::placeholder {
        color: var(--Gray5, #A8A9AD);
    }
    &:focus {
        border: 1px solid ${props => (props.error ? "#FF6464" : "#FF6464")};
        outline: none;
    }
`;

const Warning = styled.div`
    color: #FF6464;
    font-family: "Pretendard Variable";
    font-size: 1.2rem;
    font-weight: 700;
    line-height: normal;
`;

const RegisterContent = styled.div`
color: var(--Gray5, #7D7F82);
text-align: center;
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-top: 1.6rem;
margin-bottom: 27rem;
`

const Span=styled.span`
cursor: pointer;
`