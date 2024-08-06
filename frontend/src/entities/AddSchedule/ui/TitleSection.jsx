import styled from "styled-components";
import calendar from '../../../assets/Calendar.svg'
import { newScheduleState } from "../../../shared/state/AddSchedule";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import StandardInput from "../../../shared/components/StandardInput/StandardInput";
import { augustState, septemberState, crntClickedMonthState, crntClickedDayState, crntClickedIndexOfSchedulesState } from "../../../shared/state/calendar";
import { useLocation } from "react-router-dom";

function TitleSection(){
    const [isChecked, setIsChecked] = useState(false)
    const location = useLocation()
    const [newSchedule, setNewSchedule] = useRecoilState(newScheduleState)

    
    const [august, setAugust] = useRecoilState(augustState)
    
    const [september, setSeptember] = useRecoilState(septemberState)
    const crntClickedMonth = useRecoilState(crntClickedMonthState)
    
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

    // useEffect(() => {
    //     const crntSchedule = august[crntClickedDay]?.[crntClickedIndexOfSchedules];

    //     if (crntSchedule) {
    //         if (location.state?.calorie) {
    //             crntSchedule.calorie = location.state.calorie;
    //         }
    //         setNewSchedule(crntSchedule);
    //     } else {
    //         setNewSchedule((prev) => ({
    //             ...prev,
    //             calorie: location.state?.calorie || prev.calorie
    //         }));
    //     }
        
    // }, [crntClickedMonth, august, crntClickedDay, crntClickedIndexOfSchedules, location.state]);
    
    return(
        <MainLayout>

            <TitleWrap>
                <img style={{width: '32px'}}src={calendar} alt="calendar" fetchpriority="high"/>
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
