import styled from "styled-components";
import logo from "../assets/loginLogo.svg";
import StandardButton from "../shared/components/StandardButton/StandardButton";
import { useState } from "react";

function Login() {
    const [error, setError] = useState(false);

    const handleLogin = () => {
        const loginSuccess = false;
        if (!loginSuccess) {
            setError(true);
        } else {
            setError(false);
        }
    };

    return (
        <Wrapper>
            <Title>로그인</Title>
            <Logo src={logo} />
            <Container>
                <div>아이디</div>
                <Input placeholder="아이디를 입력해주세요" error={error} />
            </Container>
            <Container style={{ marginTop: "2.4rem", marginBottom: "6.5rem", height: "10.5rem" }}>
                <div>비밀번호</div>
                <Input type="password" placeholder="비밀번호를 입력해주세요" error={error} />
                {error && <Warning>아이디 또는 비밀번호가 잘못되었습니다</Warning>}
            </Container>
            <StandardButton title="로그인" width="100%" height="4.8rem" onClick={handleLogin} />
        </Wrapper>
    );
}

export default Login;

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
    font-size: 1.4rem;
    font-weight: 700;
    line-height: normal;
    margin-top: 0.8rem;
`;
