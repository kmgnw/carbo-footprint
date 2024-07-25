import { useEffect, useState } from "react";
import styled from "styled-components";
import step1 from "../../../assets/step1Icon.svg";
import step2 from "../../../assets/step2Icon.svg";
import step3 from "../../../assets/step3Icon.svg";
import step4 from "../../../assets/step4Icon.svg";
import { useRecoilValue } from "recoil";
import { selectedCheckCountState } from "../../../shared/state/TestResult";

export default function TestResultMain() {
  const [index, setIndex] = useState(0);
  const selectedCount = useRecoilValue(selectedCheckCountState);
  const result = [
    {
      color: "#D0E870",
      ment: "양호",
      explain: "올바른 탄수화물 섭취를\n하고 있어요!",
      src: step1,
    },
    {
      color: "#FF9173",
      ment: "주의",
      explain: "위험한 수준은 아니지만\n관리가 필요해요!",
      src: step2,
    },
    {
      color: "#EF6038",
      ment: "위험",
      explain: "탄수화물 섭취를 줄이기 위한\n식습관 개선이 필요해요!",
      src: step3,
    },
    {
      color: "#E3461A",
      ment: "중독",
      explain: "탄수화물 중독이에요.\n전문의 상담이 필요해요!",
      src: step4,
    },
  ];

  useEffect(() => {
    console.log(selectedCount);

    if (selectedCount === 0) {
      setIndex(0);
    } else if (selectedCount >= 1 && selectedCount <= 3) {
      setIndex(1);
    } else if (selectedCount >= 4 && selectedCount <= 6) {
      setIndex(2);
    } else if (selectedCount >= 7 && selectedCount <= 10) {
      setIndex(3);
    }
  }, []);

  return (
    <Wrapper>
      <Step style={{ backgroundColor: result[index].color }}>
        <Result>{result[index].ment}</Result>
      </Step>
      <Explain>{result[index].explain}</Explain>
      <img src={result[index].src} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 4rem 1rem 4rem;
  align-items: center;
  gap: 1.6rem;
`;

const Step = styled.div`
  padding: 0.4rem 4rem;
  border-radius: 50px;
  width: 12.5rem;
  height: 4.4rem;
`;

const Result = styled.div`
  color: var(--White, #fff);
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;

const Explain = styled.div`
  white-space: pre-wrap;
  text-align: center;
  color: var(--Gray6, #66696a);
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

