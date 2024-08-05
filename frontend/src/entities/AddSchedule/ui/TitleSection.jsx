import styled from "styled-components";
import calendar from '../../../assets/Calendar.svg'
import { newScheduleState } from "../../../shared/state/AddSchedule";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import StandardInput from "../../../shared/components/StandardInput/StandardInput";
import { augustState, septemberState, crntClickedMonthState, crntClickedDayState, crntClickedIndexOfSchedulesState } from "../../../shared/state/calendar";

function TitleSection(){
    const [isChecked, setIsChecked] = useState(false)

    const [newSchedule, setNewSchedule] = useRecoilState(newScheduleState)

    // eslint-disable-next-line
    const [august, setAugust] = useRecoilState(augustState)
    // eslint-disable-next-line
    const [september, setSeptember] = useRecoilState(septemberState)
    const crntClickedMonth = useRecoilState(crntClickedMonthState)
    // eslint-disable-next-line
    const [crntClickedDay, setCrntClickedDay] = useRecoilState(crntClickedDayState)
    const crntClickedIndexOfSchedules = useRecoilValue(crntClickedIndexOfSchedulesState)

    function handleInputChange(e) {
        setNewSchedule((prev) => ({
            ...prev,
            title:e
        }));
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

    useEffect(()=>{
        const crntSchedule = crntClickedMonth === 8 ? august[crntClickedDay][crntClickedIndexOfSchedules] : september[crntClickedDay][crntClickedIndexOfSchedules]

        setNewSchedule(crntSchedule ?? {
            firstMeal: [],
            secondMeal: [],
            thirdMeal: [],
            extraMeal: []
        })
        console.log('crntSchedule is ')
        console.log(crntSchedule)
        // eslint-disable-next-line
    },[august, september, crntClickedDay, crntClickedIndexOfSchedules])
    
    return(
        <MainLayout>

            <TitleWrap>
                <img style={{width: '32px'}}src={calendar} alt="calendar" fetchPriority="high"/>
                <Title>일정 제목</Title>
            </TitleWrap>

            <StandardInput value={newSchedule?.title ?? null} placeholder={!newSchedule?.title ||newSchedule?.title === '' ? "일정 제목을 입력해주세요." : newSchedule?.title} onChange={(e)=>handleInputChange(e)} />

            <KakaoCheckboxWrap onClick={handleCheckboxClick}>

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
