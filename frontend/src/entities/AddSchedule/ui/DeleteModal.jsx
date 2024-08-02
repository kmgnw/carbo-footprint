import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import X from '../../../assets/X.svg'
import StandardButton from "../../../shared/components/StandardButton/StandardButton"
import { newScheduleState } from "../../../shared/state/AddSchedule"
import { useRecoilState, useRecoilValue } from "recoil"
import { augustState, crntClickedDayState, crntClickedIndexOfSchedulesState } from "../../../shared/state/calendar"
import { deleteSchedule } from "../api/api"

function DeleteModal({setIsDeleteModalVisible}){

    const [newSchedule, setNewSchedule] = useRecoilState(newScheduleState)

    const navigate = useNavigate()

    const august = useRecoilValue(augustState)
    const crntClickedDay = useRecoilValue(crntClickedDayState)
    const crntClickedIndexOfSchedules = useRecoilValue(crntClickedIndexOfSchedulesState)

    const crntSchedule = august[crntClickedDay][crntClickedIndexOfSchedules]

    function handleCancelClick(){
        setIsDeleteModalVisible(false)
    }

    function handleExitClick(){
        
        deleteSchedule(crntSchedule.schedule_id)
        

        navigate(-1)
        setNewSchedule({
            firstMeal:[],
            secondMeal:[],
            thirdMeal:[],
            extraMeal:[]
        })
    }

    return(
        <MainLayout>

            <Header>
                <img src={X} onClick={handleCancelClick} style={{cursor:"pointer"}}/>
            </Header>

            <TextWrap>
                <Title>정말 삭제하시겠습니까?</Title>
                <SubTitle>
                삭제한 내용은 복구할 수 없습니다.
                </SubTitle>
            </TextWrap>

            <ButtonWrap>
                <StandardButton
                title='취소'
                width='100%'
                backgroundColor="#E3E5E7"
                color="#BABEC0"
                onClick={handleCancelClick}
                />

                <StandardButton
                width='100%'
                title='나가기'
                onClick={handleExitClick}
                />
            </ButtonWrap>

        </MainLayout>
    )
}

export default DeleteModal

const MainLayout = styled.div`
padding: 1.6rem;
`

const Header = styled.div`
display: flex;
justify-content: end;
`

const TextWrap = styled.div`
margin-top: 2.4rem;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1.1rem
`

const Title = styled.div`
color: #262829;
text-align: center;
font-family: "Noto Sans KR";
font-size: 2rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`

const SubTitle = styled.div`
color: #7D7F82;
text-align: center;
font-family: "Noto Sans KR";
font-size: 1.6rem;
font-style: normal;
font-weight: 500;
line-height: 150%; /* 24px */
`

const ButtonWrap = styled.div`
display: flex;
justify-content: space-between;
gap: 1.6rem;
margin-top: 3.2rem;
`