import styled from "styled-components";
import AiChat from "./AiChat";
import { chatbotQuestionState } from "../../../shared/state/Chatbot";
import DefaultChat from "./DefaultChat";
import MyChat from "./MyChat";
import { useRecoilValue } from "recoil";
import { useEffect, useRef } from "react";

export default function MainContent() {
  const questions = useRecoilValue(chatbotQuestionState);
  const messageEndRef = useRef(null);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [questions]);

  return (
    <Wrapper>
      <Welcome>
        반가워요
        <br />
        탄수발자국 챗봇이에요!
      </Welcome>
      <DefaultChat />
      {questions.map((item, index) =>
        item.key === "0" ? (
          <MyChat key={index} index={index} />
        ) : (
          <AiChat key={index} index={index} />
        )
      )}
      <div ref={messageEndRef}></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-height: 100%;
  overflow: auto;
`;

const Welcome = styled.div`
  color: var(--Gray8, #262829);
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  margin: 4rem 0;
`;
