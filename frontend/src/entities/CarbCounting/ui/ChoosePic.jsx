import React, { useState } from "react";
import styled from "styled-components";
import StandardButton from "../../../shared/components/StandardButton/StandardButton";
import CameraComponent from "./CameraComponent";
import test from "../../../assets/testImg.svg";
import Modal from './Modal';
import RuleContainer from "./RuleContainer";
import SelectedComponent from "./SelectedComponent";
import {useNavigate} from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { galleryState, selectedImgState } from "../../../shared/state/Gallery";

function ChoosePic() {
  const navigate = useNavigate();
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedImg = useRecoilValue(selectedImgState);

  const handleTakePicture = () => {
    setIsCameraActive(true);
  };

  const handleOpenModal = () => {

    setIsCameraActive(false);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  function blobToFile(blob, fileName) {
    const file = new File([blob], fileName, { type: 'image/png' });
    return file;
  }

  const handleResult = () =>{
    if (selectedImg) {
      const pngFile = blobToFile(selectedImg, 'tantanmen.png');
      console.log(pngFile);
      navigate("/carb-counting-result");

      // const formData = new FormData();
      // formData.append('file', pngFile);
  
      // axios.post('baseurl/', formData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data'
      //   }
      // })
      // .then(response => {
      //   console.log("서버 응답:", response.data);
      // })
      // .catch(error => {
      //   console.error("전송 중 오류 발생:", error);
      // });
  
    }
  }

  return (
    <>
      <ButtonContainer>
        <StandardButton title="사진 찍기" width="18.7rem" height="4rem" onClick={handleTakePicture}/>
        <StandardButton title="사진 등록" width="18.7rem" height="4rem" onClick={handleOpenModal}/>
      </ButtonContainer>

      <Title>업로드한 사진</Title>
      <CameraContainer>
        {!isCameraActive && (selectedImg.length > 0 ? <SelectedComponent/> : 
        <DefaultComponent>
          <DefaultIcon src={test}/>
          <DefaultAleart>아직 업로드한 사진이 없어요.</DefaultAleart>
        </DefaultComponent>
        )}
        {isCameraActive && <CameraComponent onRetake={() => setIsCameraActive(false)} />}
      </CameraContainer>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      <div style={{padding : '2.4rem 2rem 0 2rem'}} ><StandardButton title="탄수화물 함량 확인하기" onClick={handleResult}/></div>
      <div style={{padding : '4rem 2rem 0 2rem'}} >
        <RuleContainer></RuleContainer>
      </div>
    </>
  );
}

const ButtonContainer = styled.div`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  padding: 2rem;
`;

const Title = styled.div`
  color: var(--Gray8, #262829);
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-weight: 700;
  margin: 2.4rem 0 0.8rem 2rem;
`;

const CameraContainer = styled.div`
  margin: 0 2rem;
  height: 39rem;
  border-radius: 16px;
  border: 2px dashed #b3b3b3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DefaultComponent = styled.div`
  width:100%;
  height:100%;
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
  gap: 1.6rem;
`;

const DefaultIcon = styled.img`
  width: 13rem;
  height: 13rem;
`

const DefaultAleart = styled.div`
color: var(--Gray4, #BABEC0);
text-align: center;
font-family: "Noto Sans KR";
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
`

export default ChoosePic;
