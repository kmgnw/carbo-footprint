import React, { useState } from 'react';
import styled from 'styled-components';
import grayIcon from '../../../assets/testGrayCheckbox.svg';
import orangeIcon from '../../../assets/testOrangeCheckbox.svg';
import grayCheck from "../../../assets/grayCheck.svg";
import whiteCheck from "../../../assets/whiteCheck.svg";
import StandardButton from '../../../shared/components/StandardButton/StandardButton';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { selectedCheckCountState } from '../../../shared/state/TestResult';
import { isLogin } from "../../../shared/function/isLogin";
import { saveTest } from '../api/api';

export default function TestContent() {
    const [icons, setIcons] = useState(Array(10).fill(grayIcon));
    const [isReset, setIsReset] = useState(false);
    const [selectedCount, setSelectedCount] = useRecoilState(selectedCheckCountState);
    const Navigate = useNavigate();

    const testItems = [
        "아침을 배불리 먹은 후 점심시간 전에\n배가 고프다.",
        "밥, 빵, 과자 등 음식을 먹기 시작하면\n끝이 없다.",
        "음식을 금방 먹은 후에도 만족스럽지\n못하고 더 먹는다.",
        "정말 배고프지 않더라도 먹을 때가 있다.",
        "저녁을 먹고 간식을 먹지 않으면 잠이\n오지 않는다.",
        "스트레스를 받으면 자꾸 먹고 싶어진다.",
        "책상이나 식탁 위에 항상 과자, 초콜릿 등이\n놓여있다.",
        "오후 5시가 되면 피곤함과 배고픔을 느끼고\n일이 손에 안 잡힌다.",
        "과자, 초콜릿 등 단 음식은 상상만해도 먹고\n싶어진다.",
        "다이어트를 위해 식이조절을 하는데 3일도\n못 간다."
    ];

    const handleIconClick = (index) => {
        if (icons.every(icon => icon === grayIcon)) {
            setIsReset(false);
        }

        setIcons(prevIcons =>
            prevIcons.map((icon, i) => 
                i === index ? (icon === grayIcon ? orangeIcon : grayIcon) : icon
            )
        );
    };

    const handleReset = () => {
        setIcons(Array(10).fill(grayIcon));
        setIsReset(true);
    };

    const handleResult = () => {
        const count = icons.filter(icon => icon === orangeIcon).length;
        setSelectedCount(count);
        if(count == 0){
            Navigate('/carb-test-result/step1');
        }else if(count>=1 && count<=3){
        Navigate('/carb-test-result/step2');}
        else if(count>=4 && count<=7){
            Navigate('/carb-test-result/step3');
        }
        else if(count>=8 && count<=10){
            Navigate('/carb-test-result/step4')
        }
        
        if(isLogin()){
            saveTest(count);
        }
        console.log(`선택된 체크박스 개수: ${count}`);
    };

    return (
        <>
            <Wrapper>
                {icons.map((icon, index) => (
                    <CheckBoxWrapper key={index}
                    onClick={() => handleIconClick(index)} 
                    >
                        <CheckBox src={icon} />
                        <TestItem>{testItems[index]}</TestItem>
                    </CheckBoxWrapper>
                ))}
            </Wrapper>
            <Source>*식품의약품안전처 출처</Source>
            <ResetButton
                onClick={handleReset}
                style={{ 
                    backgroundColor: isReset ? "#EF6038" : "#FFF",
                    color: isReset ? "#FFF" : "#262829"
                }}
            >
                <Reset style={{ color: isReset ? "#FFF" : "#262829" }}>
                    아무 것도 해당하지 않는다.
                </Reset>
                <Icon src={isReset ? whiteCheck : grayCheck} />
            </ResetButton>
            <StandardButton title="결과 확인하기" onClick={handleResult}/>
        </>
    );
}

const Wrapper = styled.div`
    margin-top: 1.6rem;
    padding: 4rem 1.8rem 0 1.8rem;
    border-radius: 16px;
    background: #FFF;
    display: flex;
    flex-direction: column;
`;

const CheckBox = styled.img`
    width: 3.2rem;
    height: 3.2rem;
    cursor: pointer;
`;

const CheckBoxWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 4rem;
    gap: 0.8rem;
`;

const TestItem = styled.div`
    white-space: pre-wrap;
    color: #262829; 
    font-family: "Noto Sans KR";
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; 
    @media (max-width: 397px) {
    font-size: 1.5rem; 
    @media (max-width: 380px) {
    font-size: 1.4rem; 
    @media (max-width: 360px) {
    font-size: 1.3rem; 
    @media (max-width: 345px) {
    font-size: 1.2rem; 
    }
`;

const Source = styled.div`
    color: var(--Gray5, #7D7F82);
    font-family: "Noto Sans KR";
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    justify-content: flex-end;
    margin-top: 0.8rem;
`;

const ResetButton = styled.div`
    border-radius: 16px;
    margin-top: 2.4rem;
    margin-bottom: 4rem;
    padding: 1.6rem 1.8rem;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Reset = styled.div`
    font-family: "Noto Sans KR";
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; 
    @media (max-width: 397px) {
    font-size: 1.5rem; 
    @media (max-width: 380px) {
    font-size: 1.4rem; 
    @media (max-width: 360px) {
    font-size: 1.3rem; 
    @media (max-width: 345px) {
    font-size: 1.2rem; 
    }
`;

const Icon = styled.img`
    width: 2.4rem;
    height: 2.4rem;
`;