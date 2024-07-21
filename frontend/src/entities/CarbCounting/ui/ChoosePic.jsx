import React, { useState } from "react";
import styled from "styled-components";
import StandardButton from "../../../shared/components/StandardButton/StandardButton";
import CameraComponent from "./CameraComponent";
import test from "../../../assets/testImg.svg";
import Modal from './Modal';
import RuleContainer from "./RuleContainer";
import { useRecoilValue } from 'recoil';
import { selectedImgState } from "../../../shared/state/Gallery";

function ChoosePic() {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedImg = useRecoilValue(selectedImgState);

  const handleTakePicture = () => {
    setIsCameraActive(true);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ButtonContainer>
        <StandardButton title="사진 찍기" width="18.7rem" height="4rem" onClick={handleTakePicture}/>
        <StandardButton title="사진 등록" width="18.7rem" height="4rem" onClick={handleOpenModal}/>
      </ButtonContainer>

      <Title>업로드한 사진</Title>
      <CameraContainer>
        {!isCameraActive && (selectedImg.length > 0 ? <DefaultComponent src={selectedImg[0]} /> : <DefaultComponent src={test} />)}
        {isCameraActive && <CameraComponent onRetake={() => setIsCameraActive(false)} />}
      </CameraContainer>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      <div style={{padding : '2.4rem 2rem 0 2rem'}} ><StandardButton title="탄수화물 함량 확인하기"/></div>
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

const DefaultComponent = styled.img`
  width: 8rem;
  height: 8rem;
`;

export default ChoosePic;
