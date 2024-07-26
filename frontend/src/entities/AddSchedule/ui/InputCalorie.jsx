import styled from "styled-components"
import StandardInput from "../../../shared/components/StandardInput/StandardInput"
import StandardButton from "../../../shared/components/StandardButton/StandardButton"

import { newScheduleState } from "../../../shared/state/AddSchedule"
import { useRecoilState } from "recoil"
import { useNavigate } from "react-router-dom"

function InputCalorie(){

    const [newSchedule, setNewSchedule] = useRecoilState(newScheduleState)
    const navigate = useNavigate()

    function handleInputChange(value){
        
            setNewSchedule((prev) => ({
                ...prev,
                calorie: value
            }));

    }

    function handleBtnClick(){
        navigate('/carb-counting')
    }

    return(
        <MainLayout>
            <Title>총 섭취 칼로리</Title>

            <InputWrap>

                <StandardInput
                placeholder="섭취 칼로리 직접 입력"
                onChange={handleInputChange}
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