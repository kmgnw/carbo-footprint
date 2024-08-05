import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import X from '../../../assets/X.svg'
import StandardButton from "../../../shared/components/StandardButton/StandardButton"
import { newScheduleState } from "../../../shared/state/AddSchedule"
import { useRecoilState } from "recoil"

function Modal({setIsModalVisible}){

    const [newSchedule, setNewSchedule] = useRecoilState(newScheduleState)

    const navigate = useNavigate()

    function handleCancelClick(){
        setIsModalVisible(false)
    }

    function handleExitClick(){
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
                <img src={X} onClick={handleCancelClick} style={{cursor:"pointer"}} alt="x" fetchPriority="high"/>
            </Header>

            <TextWrap>
                <Title>정말 나가시겠습니까?</Title>
                <SubTitle>
                지금 나가면 입력한 내용이<br />
                저장되지 않습니다.
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

export default Modal

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