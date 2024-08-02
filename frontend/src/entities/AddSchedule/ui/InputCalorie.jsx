import styled from "styled-components"
import { useEffect } from "react"
import StandardInput from "../../../shared/components/StandardInput/StandardInput"
import StandardButton from "../../../shared/components/StandardButton/StandardButton"

import { newScheduleState } from "../../../shared/state/AddSchedule"
import { useRecoilState, useRecoilValue } from "recoil"
import { useNavigate } from "react-router-dom"

import { augustState, septemberState, crntClickedDayState, crntClickedMonthState, crntClickedIndexOfSchedulesState } from "../../../shared/state/calendar";

function InputCalorie(){

    const [newSchedule, setNewSchedule] = useRecoilState(newScheduleState)
    const navigate = useNavigate()

    const august = useRecoilValue(augustState)
    const september = useRecoilValue(septemberState)
    const crntClickedDay = useRecoilValue(crntClickedDayState)
    const crntClickedMonth = useRecoilValue(crntClickedMonthState)
    const crntClickedIndexOfSchedules = useRecoilValue(crntClickedIndexOfSchedulesState)

    function handleInputChange(value){
        
            setNewSchedule((prev) => ({
                ...prev,
                calorie: Number(value)
            }));

    }

    function handleBtnClick(){
        navigate('/carb-counting')
    }

    useEffect(()=>{
        const crntSchedule = crntClickedMonth === 8 ? august[crntClickedDay][crntClickedIndexOfSchedules] : september[crntClickedDay][crntClickedIndexOfSchedules]

        setNewSchedule(crntSchedule ?? {
            firstMeal: [],
            secondMeal: [],
            thirdMeal: [],
            extraMeal: []
        })
    },[crntClickedMonth, august, september, crntClickedDay, crntClickedIndexOfSchedules])

    return(
        <MainLayout>
            <Title>총 섭취 칼로리</Title>

            <InputWrap>

                <StandardInput
                value={newSchedule?.calorie ?? null}
                placeholder={!newSchedule?.calorie ? "섭취 칼로리 직접 입력" : newSchedule?.calorie}
                onChange={(e)=>handleInputChange(e)}
                padding="0"
                />

                <StandardButton
                title="식단 사진으로 계산하기"
                onClick={handleBtnClick}
                padding= "1.2rem 1.8rem"
                />

            </InputWrap>

        </MainLayout>
    )
}

export default InputCalorie

const MainLayout = styled.div`
padding: 1.6rem 2rem;
`

const Title = styled.div`
color: #000;
font-family: "Noto Sans KR";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: 0.8rem
`

const InputWrap = styled.div`
display: flex;
gap: 0.8rem;
`