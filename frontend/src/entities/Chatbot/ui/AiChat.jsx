import styled from "styled-components";
import profile from "../../../assets/chatbotProfile.svg";
import { chatbotQuestionState } from "../../../shared/state/Chatbot";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";

export default function AiChat({ index }) {
  const answer = useRecoilValue(chatbotQuestionState);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    setCurrentTime(`${hours}:${minutes}`);
  }, []);

  return (
    <Wrapper>
      <Profile src={profile} />
      <MessageContainer>
        <Answer>{answer[index].question}</Answer>
        <Time>{currentTime}</Time>
      </MessageContainer>
    </Wrapper>
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
  align-items: center;
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
