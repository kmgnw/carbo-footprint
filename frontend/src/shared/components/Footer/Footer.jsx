import styled from "styled-components";
import logo from "../../../assets/whiteLogo.svg";

function Footer() {
  return (
    <Wrapper>
      <Content>
        <span>멋쟁이 사자처럼 한성대학교</span>
        <span style={{ color: "#7D7F82", fontWeight: "500" }}>
          문의처: Team. 탄탄멘
        </span>
        <span style={{ color: "#7D7F82", fontWeight: "500" }}>
          all copyright by @hansung.likelion
        </span>
        <span>이용약관</span>
        <span>개인정보처리방침</span>
      </Content>
      <Logo src={logo} />
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  height: 16rem;
  position: relative;
  border-top: 1px solid var(--Gray2, #e3e5e7);
  background: var(--Gray1, #f2f3f5);
`;

const Content = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 2.9rem;
  left: 2rem;
  gap: 0.6rem;
  color: var(--Gray7, #404345);
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Logo = styled.img`
  position: absolute;
  width: 9rem;
  height: 9rem;
  top: 2.9rem;
  right: 2rem;
`;
