import styled from "styled-components";
import test from "../../../assets/testImg.svg";
import icon from "../../../assets/countingIcon.svg";
function Banner() {
  return (
    <Wrapper>
      <Content>
        당신의 식단 속<br />
        <span style={{ color: "#E4CCFF" }}>탄수화물</span>은<br />
        얼마나 포함되어 있을까요?
        <br />
      </Content>
      <Img src={icon} alt="icon" fetchPriority="high"/>
    </Wrapper>
  );
}

export default Banner;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 12rem;
  background: var(--Primary-color1, #ef6038);
  padding: 0 2rem 0 2rem;
  display: flex;
`;

const Content = styled.div`
  width: 17.8rem;
  color: var(--White, #fff);
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 24px */
  padding-top: 2.4rem;
`;

const Img = styled.img`
  position: absolute;
  width: 14rem;
  height: 11rem;
  right: 0;
  top: 1.2rem;
`;
