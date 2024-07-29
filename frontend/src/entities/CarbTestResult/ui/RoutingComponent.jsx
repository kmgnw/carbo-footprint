import styled from "styled-components"
import icon from "../../../assets/pretzelIcon.svg";
import { useNavigate } from 'react-router-dom';
import chatbot from "../../../assets/Chatbot.svg";
import scale from "../../../assets/scale.svg";
import bowl from "../../../assets/bowl.svg";
import { hoverGrow } from "../../../shared/animation/hoverGrow";


function RoutingComponent(){

    const navigate = useNavigate();

    return(
    <Wrapper>
        <TitleContinaer>
            <TitleIcon src={icon} />
            <ResultTitle>식단 분석 결과</ResultTitle>
        </TitleContinaer>

        <BannerContainer>
            
            <Banner onClick={()=>navigate('/chatbot')}>
                <div style={{display: "flex", flexDirection:"column"}}>
                <BannerTitle>탄수화물에 대해 더 알고싶다면?</BannerTitle>
                <BannerComment>탄수 발자국<br/><span style={{color: "#EF6038"}}>챗봇에게</span> 물어보기</BannerComment>
                </div>
                <div style={{display: "flex", alignItems:"center"}}><Icon src={chatbot}/></div>
            </Banner>

            <Banner onClick={()=>navigate('/carb-counting')}>
                <div style={{display: "flex", flexDirection:"column"}}>
                <BannerTitle>식단 속 탄수화물 함량이 궁금하다면?</BannerTitle>
                <BannerComment><span style={{color: "#EF6038"}}>탄수화물 함량</span><br/>카운팅하기</BannerComment>
                </div>
                <div style={{display: "flex", alignItems:"center"}}><Icon src={scale}/></div>
            </Banner>

            <Banner onClick={()=>navigate('/diet-recommend')}>
                <div style={{display: "flex", flexDirection:"column"}}>
                <BannerTitle>내 취향에 맞는 건강식단이 궁금하다면?</BannerTitle>
                <BannerComment>나에게 <span style={{color: "#EF6038"}}>딱 맞는 식단</span><br/>추천받기</BannerComment>
                </div>
                <div style={{display: "flex", alignItems:"center"}}><Icon src={bowl}/></div>
            </Banner>

        </BannerContainer>
    </Wrapper>);
}

export default RoutingComponent;

const Wrapper = styled.div`
padding: 4rem 2rem 4rem 2rem;
`

const TitleContinaer = styled.div`
display: flex;
align-items: center;

`
const TitleIcon = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  margin-right: 8px;
`;

const ResultTitle = styled.div`
  color: var(--Gray8, #262829);
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const BannerContainer = styled.div`
display: flex;
flex-direction: column;
gap: 0.8rem;
margin-top: 1.7rem;

`

const Banner = styled.div`
display: flex;
height: 13.4rem;
border-radius: 16px;
background: #FFF;
box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.20);
cursor: pointer;
padding: 2rem 3.2rem;
align-items: center;
gap: 0.5rem;
justify-content: space-between;
@media (hover: hover) {
	${hoverGrow}
    }
`

const BannerTitle = styled.div`
color: var(--Gray5, #7D7F82);
font-family: "Noto Sans KR";
font-size: 1.2rem;
font-style: normal;
font-weight: 500;
line-height: 150%;
@media (max-width: 370px) {
    font-size: 1.1rem; }
    @media (max-width: 355px) {
    font-size: 1rem; }
`

const BannerComment = styled(BannerTitle)`
font-size: 1.6rem;
font-weight: 700;
color: #262829
`

const Icon = styled.img`
width: 6.4rem;
height: 6.4rem;
`