import styled from "styled-components";
import GNB1 from '../../../assets/GNB1.svg'
import GNB2 from '../../../assets/GNB2.svg'
import GNB3 from '../../../assets/GNB3.svg'
import GNB4 from '../../../assets/GNB4.svg'
import GNB5 from '../../../assets/myPage.svg'

import GNBCell from './GNBCell'
import { useNavigate } from "react-router-dom";

function GNB (){

    const navigate = useNavigate()

    return(
        <MainLayout>
            <GNBCell title={"식단 추천"} img={GNB1} onClick={()=>navigate('/diet-recommend')}/>
            <GNBCell title={"탄수 카운팅"} img={GNB2} onClick={()=>navigate('/carb-counting')} />
            <GNBCell title={"중독 테스트"} img={GNB3} onClick={()=>navigate('/carb-test')}/>
            <GNBCell title={"커뮤니티"} img={GNB4} onClick={()=>navigate('/community')}/>
            <GNBCell title={"마이페이지"} img={GNB5} onClick={()=>navigate('/mypage')}/>
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