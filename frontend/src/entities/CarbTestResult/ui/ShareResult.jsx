import styled from "styled-components"
import link from '../../../assets/Link.svg'
import kakao from '../../../assets/Kakao.svg'
import { hoverGrow } from "../../../shared/animation/hoverGrow"
import { shareKakao } from "../../../util/kakaoLink"
import CustomAlert from "../../CarbCountingResult.jsx/ui/CustomAlert"
import { useState } from "react"

function ShareResult() {

    const [alert, setAlert] = useState({ visible: false, message: '', success: true });

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

    return (
        <>
        <div style={{
          height:"3rem",
          marginBottom: "1.5rem"
          }}><CustomAlert message={alert.message} visible={alert.visible} success={alert.success} /></div>
        
        <MainLayout>
            <Title>테스트 결과를 공유하세요!</Title>
            <ButtonWrap>
                <CopyLinkWrap>
                    <Img src={link} onClick={copyLink}/>
                </CopyLinkWrap>
                <Img src={kakao} onClick={shareKakao}/>
            </ButtonWrap>
        </MainLayout>
        </>
    )
}

export default ShareResult

const MainLayout = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 8rem;
padding: 1.6rem 1.8rem;
background-color: black;
`

const Title = styled.div`
color: #FFF;
font-family: "Noto Sans KR";
font-size: 1.6rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`

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

const Img = styled.img`
@media (hover: hover) {
	${hoverGrow}
    }
cursor: pointer;
`