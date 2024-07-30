import styled from "styled-components";
import Header from "../entities/Chatbot/ui/Header";
import MainContent from "../entities/Chatbot/ui/MainContent";
import send from "../assets/sendIcon.svg";
import sendOrange from "../assets/sendOrange.svg";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { chatbotQuestionState } from "../shared/state/Chatbot";
import { useEffect } from "react";
import { sendQuestion } from "../entities/Chatbot/api/chatbotApi";

export default function Chatbot() {
  const [sendIcon, setSendIcon] = useState(send);
  const [inputValue, setInputValue] = useState("");
  const [questions, setQuestions] = useRecoilState(chatbotQuestionState);

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSend = async () => {
    setInputValue("");
    setQuestions((prevQuestions) => [
      ...prevQuestions,
      { key: "0", question: inputValue },
    ]);
    if (inputValue.trim() !== "") {
      try {
        const result = await sendQuestion("true", inputValue);
        console.log("Question sent successfully:", result);

        setQuestions((prevQuestions) => [
          ...prevQuestions,
          { key: "1", question: result.result.answer },
        ]);
      } catch (error) {
        console.error("Error sending question:", error);
      }
    }
  };

  return (
    <Wrapper>
      <Header />
      <Content>
        <MainContent />
      </Content>
      <InputContainer>
        <Input
          placeholder="챗봇에게 질문을 해보세요."
          value={inputValue}
          onChange={handleInputChange}
        />
        <Send
          src={inputValue ? sendOrange : send}
          onClick={handleSend}
          onMouseEnter={() => inputValue && setSendIcon(sendOrange)}
          onMouseLeave={() => inputValue && setSendIcon(send)}
          onMouseDown={() => inputValue && setSendIcon(sendOrange)}
          onMouseUp={() => inputValue && setSendIcon(send)}
        />
      </InputContainer>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background: var(--Gray1, #f2f3f5);
`;

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 2rem;
`;

const InputContainer = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  background-color: #fff;
  align-items: center;
  padding: 0 2rem;
  gap: 0.8rem;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  font-family: "Noto Sans KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  height: 36px;
  padding: 0.9rem 1.6rem;
  align-items: center;
  border-radius: 20px;
  border: 1px solid var(--Gray2, #e3e5e7);
  background: var(--Gray1, #f2f3f5);
  &:focus {
    border-color: #ef6038;
    outline: none;
    color: #262829;
  }
`;

const Send = styled.img`
  cursor: pointer;
  width: 3rem;
  height: 3rem;
`;
