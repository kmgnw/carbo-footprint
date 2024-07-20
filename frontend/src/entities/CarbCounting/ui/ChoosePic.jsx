import React, { useState } from "react";
import styled from "styled-components";
import StandardButton from "../../../shared/components/StandardButton/StandardButton";
import CameraComponent from "./CameraComponent";
import test from "../../../assets/testImg.svg";

function ChoosePic() {
  const [isCameraActive, setIsCameraActive] = useState(false);

  const handleTakePicture = () => {
    setIsCameraActive(true);
  };

  return (
    <>
      <ButtonContainer>
        <StandardButton
          title="사진 찍기"
          width="18.7rem"
          onClick={handleTakePicture}
        />
        <StandardButton title="사진 등록" width="18.7rem" />
      </ButtonContainer>

      <Title>업로드한 사진</Title>
      <CameraContainer>
        {!isCameraActive && <DefaultComponent src={test} />}
        {isCameraActive && <CameraComponent onRetake={() => setIsCameraActive(false)} />}
      </CameraContainer>
    </>
  );
}

const ButtonContainer = styled.div`
  background: #fff;
  height: 80px;
  display: flex;
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
