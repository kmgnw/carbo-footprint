import styled from "styled-components"
import Calendar from "../shared/components/calendar/Calendar.jsx"
import GNB from "../entities/Main/ui/GNB.jsx"
import Slider from '../shared/components/slider/Slider.jsx'
import FootprintCounter from "../entities/Main/ui/FootprintCounter.jsx"
import Header from "../entities/Main/ui/Header.jsx"
import randomImage from '../assets/randomImage.png'

function Main() {

    return (
        <MainLayout>

            <Header />

            <Slider contents={[
                (<div>slider1</div>),
                (<div>slider2</div>),
                (<div>slider3</div>)
            ]} />
            <GNB />
            <SubLayout>
                <FootprintCounter>탄수 발자국</FootprintCounter>
                <Calendar />
            </SubLayout>
        </MainLayout>
    )
}

const MainLayout = styled.div`
width: 100%;
// height: 1000px;
`

const SubLayout = styled.div`
width: 100%;
height: 700px;
padding: 16px 20px 0px 20px;
background-color: #F4F4F4;
`

export default Main;