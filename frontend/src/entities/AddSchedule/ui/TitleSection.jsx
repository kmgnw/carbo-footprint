import styled from "styled-components";
import calendar from '../../../assets/Calendar.svg'
import Unchecked from '../../../assets/Uncheck.svg'
import Checked from '../../../assets/Check.svg'
import { newScheduleState } from "../../../shared/state/AddSchedule";
import { useRecoilState } from "recoil";
import { useState } from "react";
import StandardInput from "../../../shared/components/StandardInput/StandardInput";

function TitleSection(){
    const [isChecked, setIsChecked] = useState(false)

    const [newSchedule, setNewSchedule] = useRecoilState(newScheduleState)

    function handleInputChange(e) {
        setNewSchedule((prev) => ({
            ...prev,
            title: e
        }));
        console.log(newSchedule)
    }

    function handleCheckboxClick(){
        if(isChecked){
            setIsChecked(false)
            setNewSchedule((prev) => ({
                ...prev,
                isKakao: false
            }));
        }
        else{
            setIsChecked(true)
            setNewSchedule((prev) => ({
                ...prev,
                isKakao: true
            }));
        }
    }
    
    return(
        <MainLayout>

            <TitleWrap>
                <img style={{width: '32px'}}src={calendar} />
                <Title>일정 제목</Title>
            </TitleWrap>

            <StandardInput placeholder="일정 제목을 입력해주세요." onChange={(e)=>handleInputChange(e)} />

            <KakaoCheckboxWrap onClick={handleCheckboxClick}>

                <StyledCheckbox isChecked={isChecked}>
                    <img src={isChecked ? Checked: Unchecked} />
                </StyledCheckbox>

                <CheckboxTitle>
                    카톡으로 식단 추천 받기
                </CheckboxTitle>

            </KakaoCheckboxWrap>

        </MainLayout>
    )
}
export default TitleSection;

const MainLayout = styled.div`
display: flex;
flex-direction: column;
width: 100%;
padding: 2.4rem 2rem 2.4rem 2rem;
background-color: #F2F3F5
`

const TitleWrap = styled.div`
display: flex;
gap: 0.9rem;
align-items: center;
margin-bottom: 0.8rem
`

const Title = styled.div`
color: #000;
font-family: "Pretendard Variable";
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
`

const KakaoCheckboxWrap = styled.div`
display: flex;
align-items: center;
gap: 0.8rem;
margin-top: 1.6rem
`

const StyledCheckbox = styled.div`
width: 2.4rem;
height: 2.4rem;
padding: 0.4rem;
border-radius: 4px;
background-color: ${({ isChecked }) => isChecked ? '#EF6038' : '#E3E5E7'};
`

const CheckboxTitle = styled.div`
color: #000;
font-family: "Noto Sans KR";
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
`