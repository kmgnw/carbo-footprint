import styled from "styled-components"
import { useEffect, useState } from "react";
import Header from "../entities/Mypage/ui/Header";
import FootprintCounterArea from '../entities/Mypage/ui/FootprintCounterArea'
import Tabbar from "../entities/Mypage/ui/Tabbar";
import SectionContent from "../entities/Mypage/ui/GoToDietRecommend";
import DietRecommendResultTab from "../entities/Mypage/ui/DietRecommendResultTab";
import CarbCountingResultTab from "../entities/Mypage/ui/CarbCountingResultTab";
import CarbTestResultTab from "../entities/Mypage/ui/CarbTestResultTab";
import { useNavigate } from "react-router-dom";

function Mypage (){

    const [tab, setTab] = useState(0);
    const [section, setSection] = useState({})
    const navigate = useNavigate()

    function renderSectionContentArg(){
        if (tab === 0) {
            return {
                sectionTitle: '또 다른 식단이 궁금하다면?',
                sectionButtonText: '추천받기',
                onClick: ()=>{navigate('/diet-recommend')}
            }
        } else if (tab === 1) {
            return {
                sectionTitle: '오늘 먹을 점심의 탄수화물 포함량은?',
                sectionButtonText: '알아보기',
                onClick: ()=>{navigate('/carb-counting')}
            }
        } else if (tab === 2) {
            return {
                sectionTitle: '다시 테스트 해보고 싶다면?',
                sectionButtonText: '테스트하기',
                onClick: ()=>{navigate('/carb-test')}
            }
        } else if (tab === 3) {
            return {sectionTitle: '다른 채팅방도 궁금하다면?', sectionButtonText: '이동하기'}
        }
    }

    function renderContent() {
        if (tab === 0) {
            return <DietRecommendResultTab />;
        } else if (tab === 1) {
            return <CarbCountingResultTab />;
        } else if (tab === 2) {
            return <CarbTestResultTab />;
        } else if (tab === 3) {
            return <>커뮤니티</>;
        }
    }

    useEffect(()=>{
        setSection(renderSectionContentArg())
    }, [tab])

    return(
        <>
        <Header />

        <FootprintCounterArea />

        <Tabbar tab={tab} setTab={setTab}/>

        <SectionContent
        title={section.sectionTitle}
        buttonText={section.sectionButtonText}
        onClick={section.onClick}
        />

        <TabLayout>
            {renderContent()}
        </TabLayout>
        
        </>
    )
}

export default Mypage

const TabLayout = styled.div`
padding: 4rem 2rem
`