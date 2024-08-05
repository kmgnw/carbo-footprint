import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { selectedImgState, galleryState, resultDataState, foodCodeState, fileState} from "../../../shared/state/Gallery";
import test from "../../../assets/testImg.svg";
import icon from "../../../assets/pretzelIcon.svg";
import link from '../../../assets/Link.svg'
import kakao from '../../../assets/Kakao.svg'
import StandardButton from "../../../shared/components/StandardButton/StandardButton";
import Carousel from "./Carousel";
import CustomAlert from "./CustomAlert";
import { shareKakao } from "../../../util/kakaoLink";
import { useState, useEffect } from "react";
import { hoverGrow } from "../../../shared/animation/hoverGrow";
import MenuCarousel from "./MenuCarousel";
import {useNavigate} from "react-router-dom";
import { saveClassification } from "../api/api";

function MainContent() {
  const selectedImg = useRecoilValue(selectedImgState);
  const gallery = useRecoilValue(galleryState);
  const kcal = useRecoilValue(resultDataState)
  const [alert, setAlert] = useState({ visible: false, message: '', success: true });
  const navigate = useNavigate();
  const code = useRecoilValue(foodCodeState);
  const file = useRecoilValue(fileState);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setAlert({ visible: true, message: '링크를 복사했어요!', success: true });
      setTimeout(() => setAlert({ ...alert, visible: false }), 1000); 
    }).catch((error) => {
      setAlert({ visible: true, message: '링크 복사에 실패했습니다.', success: false });
      setTimeout(() => setAlert({ ...alert, visible: false }), 1000);
      console.error('Link copy failed', error);
    });
  };

  const handleSave = async () => {
    const token = sessionStorage.getItem('token');
    
    if (!token) {
        navigate('/login');
    } else {
        try {
            await saveClassification(file[selectedImg], code);
            navigate('/');
        } catch (error) {
            console.error('저장 중 오류 발생:', error);
            alert('저장 중 오류가 발생했습니다. 다시 시도해 주세요.');
        }
    }
};

  return (
    <Wrapper>
      <Title>업로드한 사진</Title>
      <PicContainer>
        <Img src={gallery[selectedImg]} alt="gallery" fetchPriority="high"/>
      </PicContainer>

      <ResultContainer>
        <TitleIcon src={icon} alt="icon" fetchPriority="high"/>
        <ResultTitle>식단 분석 결과</ResultTitle>
      </ResultContainer>

      <CntContainer style={{ marginTop: "0.8rem" }}>
        <FontContainer>총</FontContainer>
        <FoodCntContainer>{kcal.calorie}</FoodCntContainer>
        <FontContainer>kcal</FontContainer>
      </CntContainer>

      <FontContainer style={{ marginTop: "4rem", marginLeft: "2rem" }}>
        식단 총 함량 분석
      </FontContainer>
      <Carousel />

      <FontContainer style={{ marginTop: "3.2rem", marginLeft: "2rem" }}>
        메뉴 분석
      </FontContainer>
      <MenuCarousel />

      <div style={{height:"3rem"}}><CustomAlert message={alert.message} visible={alert.visible} success={alert.success} /></div>
      <ShareContainer>
        <FontContainer
          style={{ color: "#fff", position: "absolute", left: "2rem" }}
        >
          분석 결과를 공유해보세요
        </FontContainer>

        <IconContainer>
        <ButtonWrap>
                <CopyLinkWrap>
                    <IconImg src={link} onClick={copyLink} alt="link" fetchPriority="high"/>
                </CopyLinkWrap>
                <IconImg src={kakao} onClick={shareKakao} alt="kakao" fetchPriority="high"/>
            </ButtonWrap>
        </IconContainer>
      </ShareContainer>

      <ButtonContainer>
        <StandardButton title="다시 해보기" width="18.7rem" height="4rem" onClick={() => navigate('/carb-counting')}/>
        <StandardButton
          title="총 칼로리 기록하기"
          width="18.7rem"
          height="4rem"
          backgroundColor="#EF6038"
          onClick={() => handleSave()}
        />
      </ButtonContainer>
    </Wrapper>
  );
}

export default MainContent;

const Wrapper = styled.div`
  background: var(--Gray1, #f2f3f5);
  padding: 2.4rem 0 0 0;
`;

const Title = styled.div`
  color: var(--Gray8, #262829);
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 2rem;
  margin-top: 2.4rem;
  margin-bottom: 0.8rem
`;

const Img = styled.img`
  border-radius: 16px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PicContainer = styled.div`
  margin: 0.8rem 2rem 0 2rem;
  height: 39rem;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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

const ResultContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;
  margin-top: 4.6rem;
`;

const FontContainer = styled(ResultTitle)`
  font-size: 16px;
`;

const FoodCntContainer = styled(FontContainer)`
  display: flex;
  width: fit-content;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--Gray2, #e3e5e7);
  background: var(--White, #fff);
  color: var(--Primary-color1, #ef6038);
`;

const CntContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;
  margin-top: 2.4rem;
  gap: 0.8rem;
`;

const ShareContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 8rem;
  background: var(--Black, #000);
  margin-top: 2rem;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  right: 1.8rem;
`;


const ButtonContainer = styled.div`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  padding: 2rem;
`;

const ButtonWrap = styled.div`
display: flex;
gap: 0.8rem;
`

const CopyLinkWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 4.8rem;
height: 4.8rem;
background-color: white;
border-radius: 50%;
@media (hover: hover) {
	${hoverGrow}
    }
`

const IconImg = styled.img`
@media (hover: hover) {
	${hoverGrow}
    }
cursor: pointer;
`