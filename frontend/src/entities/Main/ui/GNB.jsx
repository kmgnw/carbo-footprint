import styled from "styled-components";
import card from '../../../assets/randomImage.png'
import GNBCell from './GNBCell'

function GNB (){
    return(
        <MainLayout>
            <GNBCell title={"식단 추천"} img={card} />
            <GNBCell title={"탄수 카운팅"} img={card} />
            <GNBCell title={"중독 테스트"} img={card} />
            <GNBCell title={"커뮤니티"} img={card} />
        </MainLayout>
    )
}

export default GNB;

const MainLayout = styled.div`
display: flex;
justify-content: space-evenly;
width: 100%;
padding: 9px 0 9px 0;
`