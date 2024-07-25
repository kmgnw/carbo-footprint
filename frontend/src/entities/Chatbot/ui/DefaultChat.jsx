import styled from "styled-components";
import profile from "../../../assets/chatbotProfile.svg";
import { chatbotQuestionState } from "../../../shared/state/Chatbot";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { hoverGrow } from "../../../shared/animation/hoverGrow";

export default function AiChat() {
  const [question, setQuestions] = useRecoilState(chatbotQuestionState);
  const [currentTime, setCurrentTime] = useState("");

  {
    /*여기서 백엔드한테 전송*/
  }
  const handleBtnClick1 = () => {
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      { key: "0", question: "외식 메뉴 추천받기" },
    ]);
  };

  const handleBtnClick2 = () => {
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      { key: "0", question: "건강한 탄수화물이란?" },
    ]);
  };

  const handleBtnClick3 = () => {
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      { key: "0", question: "과일도 탄수화물?" },
    ]);
  };

  useEffect(() => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    setCurrentTime(`${hours}:${minutes}`);
  }, []);

  return (
    <>
      <Wrapper>
        <Profile src={profile} />
        <MessageContainer>
          <Answer>어떤 궁금증이 있으신가요?</Answer>
          <Time>{currentTime}</Time>
        </MessageContainer>
      </Wrapper>
      <Wrapper>
        <Profile src={profile} style={{ visibility: "hidden" }} />
        <MessageContainer>
          <Answer style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: "1.6rem",
                fontWeight: "700",
                marginTop: "1.2rem",
              }}
            >
              다양한 탄수화물 관련
              <br />
              궁금증을 해결해보세요!
            </div>
            <Button style={{ marginTop: "2.4rem" }} onClick={handleBtnClick1}>
              외식 메뉴 추천받기
            </Button>
            <Button style={{ marginTop: "0.8rem" }} onClick={handleBtnClick2}>
              건강한 탄수화물이란?
            </Button>
            <Button
              style={{ marginTop: "0.8rem", marginBottom: "2.4rem" }}
              onClick={handleBtnClick3}
            >
              과일도 탄수화물?
            </Button>
            이외에도 궁금한 질문사항을 자유롭게 질문해보세요!
          </Answer>
          <Time>{currentTime}</Time>
        </MessageContainer>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  width: 100%;
  margin-bottom: 0.8rem;
`;

const Profile = styled.img``;

const MessageContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Answer = styled.div`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  color: var(--Gray8, #262829);
  font-family: "Noto Sans KR";
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.1rem;
  border-radius: 16px;
  border: 1px solid var(--Gray2, #e3e5e7);
  background: var(--White, #fff);
  max-width: 23rem;
  white-space: normal;
`;

const Time = styled.div`
  align-self: flex-end;
  font-size: 1.2rem;
  color: var(--Gray5, #7d7f82);
  margin-left: 0.8rem;
`;

const Button = styled.div`
  width: 100%;
  display: flex;
  height: 4rem;
  padding: 1.2rem 1.09rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 8px;
  background: var(--Black, #000);
  color: #fff;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  cursor: pointer;
  ${hoverGrow}
`;
