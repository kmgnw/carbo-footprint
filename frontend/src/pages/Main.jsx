import styled from "styled-components"
import Calendar from "../shared/components/calendar/Calendar.jsx"
import GNB from "../entities/Main/ui/GNB.jsx"
import Slider from "../shared/components/slider/Slider.jsx"
import FootprintCounter from "../entities/Main/ui/FootprintCounter.jsx"
import Header from "../entities/Main/ui/Header.jsx"
import Chatbot_floating from '../assets/Chatbot_floating.svg'
import { hoverGrow } from "../shared/animation/hoverGrow.jsx"
import { crntClickedDayState, crntClickedIndexOfSchedulesState } from "../shared/state/calendar.js"
import { useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import { useEffect } from "react"

function Main() {

    const [crntClickedDay, setCrntClickedDay] = useRecoilState(crntClickedDayState)
    const [crntClickedIndexOfSchedules, setCrntClickedIndexOfSchedules] = useRecoilState(crntClickedIndexOfSchedulesState)

    const navigate = useNavigate()

    useEffect(() => {
        setCrntClickedDay(-1)
        setCrntClickedIndexOfSchedules(-1)
    }, [])

    return (
        <MainLayout>

            <Header />

            <Slider />

            <GNB />

            <SubLayout>

                <FootprintCounter>탄수 발자국</FootprintCounter>

                <Calendar />

            </SubLayout>

            <FloatingChatbotWrap>
                <Img src={Chatbot_floating} onClick={() => navigate('/chatbot')} />
            </FloatingChatbotWrap>

        </MainLayout>
    )
}

const MainLayout = styled.div`
position: relative;
width: 100%;
// height: 1000px;
`

const SubLayout = styled.div`
width: 100%;
height: 700px;
padding: 16px 20px 0px 20px;
background-color: #F4F4F4;
position: relative
`

const FloatingChatbotWrap = styled.div`
position: absolute;
bottom: 11.7rem;
right:2rem;
display: flex;
width: 6rem;
height: 6rem;
padding: 1.6rem 1.5rem;
justify-content: center;
align-items: center;
gap: 1rem;
background-color:black;
border-radius: 3rem;
background: #000;
box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.20);
@media (hover: hover) {
	${hoverGrow}
    }

@media (max-width: 428px){
position: fixed;
bottom: 3.7rem;
right:2rem;
}
`

const Img = styled.img`
cursor: pointer;
@media (hover: hover) {
	${hoverGrow}
    }
`

export default Main;
