import styled from "styled-components"
import dietLog from '../../../assets/DietLog.svg'
import Choices from '../../../shared/components/choices/Choices'
import { useRecoilState, useRecoilValue } from "recoil";
import { augustState, septemberState, crntClickedMonthState , crntClickedDayState, crntClickedIndexOfSchedulesState } from "../../../shared/state/calendar";
import { newScheduleState } from "../../../shared/state/AddSchedule";
import { useEffect } from "react";

function DietLog(){

    const august = useRecoilValue(augustState)
    const september = useRecoilValue(septemberState)
    const crntClickedMonth = useRecoilValue(crntClickedMonthState) 
    const crntClickedDay = useRecoilValue(crntClickedDayState) 
    const crntClickedIndexOfSchedules = useRecoilValue(crntClickedIndexOfSchedulesState)

    const [_, setNewSchedule] = useRecoilState(newScheduleState)

    useEffect(() => {

        const crntSchedule = crntClickedMonth === 8 ? august[crntClickedDay][crntClickedIndexOfSchedules] : september[crntClickedDay][crntClickedIndexOfSchedules]


        setNewSchedule((prev) => ({
            ...prev,
            firstMeal: crntSchedule?.firstMeal ?? '',
            secondMeal: crntSchedule?.secondMeal ?? '',
            thirdMeal: crntSchedule?.thirdMeal ?? '',
            extraMeal: crntSchedule?.extraMeal ?? '',
        }));
    }, [crntClickedMonth, august, september, crntClickedDay, crntClickedIndexOfSchedules]);
    return(
        <MainLayout>
            <TitleWrap>

                <img src={dietLog}
                style={{
                    width:'3.2rem'
                }} 
                />

                <Title>
                    식단 기록
                </Title>

                <Desc>
                    다중 선택 가능합니다.
                </Desc>

            </TitleWrap>

            <Choices title='한 끼' choices={['중식', '일식', '한식', '양식', '샐러드', '빵', '과일', '기타' ]} type='firstMeal' />
            <Choices title='두 끼' choices={['중식', '일식', '한식', '양식', '샐러드', '빵', '과일', '기타' ]} type='secondMeal'/>
            <Choices title='세 끼' choices={['중식', '일식', '한식', '양식', '샐러드', '빵', '과일', '기타' ]} type='thirdMeal'/>
            <Choices title='더 먹끼' choices={['중식', '일식', '한식', '양식', '샐러드', '빵', '과일', '기타' ]} type='extraMeal'/>

        </MainLayout>
    )
}
export default DietLog

const MainLayout = styled.div`
padding: 4rem 2rem 0 2rem;
`

const TitleWrap = styled.div`
display: flex;
align-items: center
`

const Title = styled.div`
color: #262829;
font-family: "Noto Sans KR";
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-left: 0.4rem;
`

const Desc = styled.div`
color: var(--Primary-color1, #EF6038);
font-family: "Noto Sans KR";
font-size: 10px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-left: 0.8rem;
`