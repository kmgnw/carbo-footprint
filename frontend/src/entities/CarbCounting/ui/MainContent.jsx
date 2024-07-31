import styled from "styled-components";
import ChoosePic from "./ChoosePic";

function MainContent() {
  return (
    <Wrapper>
      <Title>사진 등록</Title>
      <Subtitle>음식 종류를 파악할 수 있는 사진을 등록해주세요</Subtitle>
      <TipContainer>
        <TipIcon>TIPS!</TipIcon>
        <TipContent>
          모바일 접속 시에는&nbsp;
          <span style={{ color: "var(--Gray8, #262829)" }}>사진 등록하기</span>
          를 이용해보세요!
        </TipContent>
      </TipContainer>
      <ChoosePic />
    </Wrapper>
  );
}

export default MainContent;

const Wrapper = styled.div`
  background: var(--Gray1, #f2f3f5);
  padding: 2.4rem 0 4rem 0;
`;

const Title = styled.div`
  color: var(--Gray8, #262829);
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 2rem;
`;

const Subtitle = styled(Title)`
  color: var(--Gray4, #babec0);
  font-size: 14px;
  font-weight: 500;
  margin-top: 4px;
`;

const TipContainer = styled.div`
  display: flex;
  height: 4rem;
  border-radius: 8px;
  border: 1px solid var(--Gray2, #e3e5e7);
  background: var(--White, #fff);
  margin-top: 1.6rem;
  margin: 1.6rem 2rem 0.8rem 2rem;
  padding: 1.1rem 0 1.1rem 1.6rem;
`;

const TipIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.2rem;
  height: 1.8rem;
  border-radius: 20px;
  background: var(--Primary-color1, #ef6038);
  color: var(--White, #fff);
  font-family: "Noto Sans KR";
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const TipContent = styled.div`
  margin-left: 4px;
  display: flex;
  height: 1.7rem;
  align-items: center;
  color: var(--Gray5, #7d7f82);
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
