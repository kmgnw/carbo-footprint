import styled from "styled-components";
import gotocalendar from '../../../assets/GoToCalendar.svg'
import FootprintCounter from "../../Main/ui/FootprintCounter";
import { useNavigate } from "react-router-dom";

function FootprintCounterArea (){

    const navigate = useNavigate()

    function handleGoToCalendarCLick(){
        navigate('/')   
    }

    return(
        <MainLayout>

            <GoToCalendarWrap>
                <GoToCalendarContainer>

                    <img src={gotocalendar} alt="calendar" fetchPriority="high"/>

                    <GotoCalendarTitle onClick={handleGoToCalendarCLick}>
                        달력으로 이동
                    </GotoCalendarTitle>
                    
                </GoToCalendarContainer>
            </GoToCalendarWrap>

            <FootprintCounter />
        </MainLayout>
    )
}

export default FootprintCounterArea;

const MainLayout = styled.div`
width: 100%;
height: 17.6rem;
background-color: #F2F3F5;
padding: 2.8rem 2rem;
`

const GoToCalendarWrap = styled.div`
display: flex;
justify-content: end;
margin-bottom: 0.8rem;
`

const GoToCalendarContainer = styled.div`
display: flex;
gap: 0.4rem;
justify-content: end
`

const GotoCalendarTitle = styled.div`
color: #EF6038;
text-align: center;
font-family: "Pretendard Variable";
font-size: 1.4rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`