import styled from "styled-components";
import GNB1 from '../../../assets/GNB1.svg'
import GNB2 from '../../../assets/GNB2.svg'
import GNB3 from '../../../assets/GNB3.svg'
import GNB4 from '../../../assets/GNB4.svg'

import GNBCell from './GNBCell'

function GNB (){
    return(
        <MainLayout>
            <GNBCell title={"식단 추천"} img={GNB1} />
            <GNBCell title={"탄수 카운팅"} img={GNB2} />
            <GNBCell title={"중독 테스트"} img={GNB3} />
            <GNBCell title={"커뮤니티"} img={GNB4} />
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