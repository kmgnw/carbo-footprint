import styled from "styled-components";
import { useEffect, useState } from "react";
import { chatbotQuestionState } from "../../../shared/state/Chatbot";
import { useRecoilValue } from "recoil";

export default function MyChat({ index }) {
  const questions = useRecoilValue(chatbotQuestionState);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    setCurrentTime(`${hours}:${minutes}`);
  }, []);

  return (
    <Wrapper>
      <MessageContainer>
        <Time>{currentTime}</Time>
        <Answer>{questions[index].question}</Answer>
      </MessageContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 0.8rem;
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  width: 100%;
`;

const MessageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const Answer = styled.div`
  display: flex;
  padding: 0.8rem 1.6rem;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: "Noto Sans KR";
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.1rem;
  border-radius: 16px;
  background: #ef6038;
  max-width: 23rem;
  white-space: normal;
`;

const Time = styled.div`
  align-self: flex-end;
  font-size: 1.2rem;
  color: var(--Gray5, #7d7f82);
  margin-right: 0.8rem;
`;
