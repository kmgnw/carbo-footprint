import styled from "styled-components";
import Dislike from '../../../assets/Dislike.svg'
import Choices from "./Choices";
import NotPickyButton from "./NotPickyButton";
import { newAllergyTypeState } from "../../../shared/state/DietRecommend";
import { useRecoilState } from "recoil";

function Allergy() {

    const [_, setNewAllergyType] = useRecoilState(newAllergyTypeState)

    return (
        <MainLayout>
            <img src={Dislike} />

            <Title>
                알레르기가 있거나<br />
                못먹는 음식을 골라주세요!
            </Title>

            <SubTitle>
                중복 선택도 가능해요.
            </SubTitle>

            <Choices
                title='title'
                choices={['우유', '메밀', '땅콩', '대두', '밀', '고등어', '게', '새우', '돼지고기', '복숭아', '토마토', '아황산류', '호두', '잣', '키위', '닭고기', '조개', '굴', '전복', '홍합', '오징어', '소고기', '참깨', '난류 (가공류에 한함)']}
                type='allergy'
            />

            <NotPickyButton
                title='가리는 것 없음'
                type='allergy'
            />

        </MainLayout>
    )
}

export default Allergy;

const MainLayout = styled.div`
padding: 9.2rem 1.9rem;
display: flex;
flex-direction: column;
align-items: center;
`

const Title = styled.div`
margin-top:1.6rem;
margin-bottom:0.8rem;
color: #262829;
text-align: center;
font-family: "Noto Sans KR";
font-size: 1.6rem;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 24px */
`

const SubTitle = styled.div`
color: #EF6038;
text-align: center;
font-family: "Noto Sans KR";
font-size: 1.2rem;
font-style: normal;
font-weight: 500;
line-height: 150%; /* 18px */
margin-bottom: 10rem
`