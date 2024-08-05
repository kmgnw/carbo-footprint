import React, { useState } from "react";
import styled from "styled-components";
import StandardButton from "../../../shared/components/StandardButton/StandardButton";
import CameraComponent from "./CameraComponent";
import test from "../../../assets/testImg.svg";
import Modal from "./Modal";
import RuleContainer from "./RuleContainer";
import SelectedComponent from "./SelectedComponent";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  fileState,
  galleryState,
  resultDataState,
  selectedImgState,
  foodCodeState
} from "../../../shared/state/Gallery";
import bread from "../../../assets/breadIcon.svg";
import { sendClassification } from "../api/api";

function ChoosePic() {
  const navigate = useNavigate();
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const file = useRecoilValue(fileState);
  const selectedImg = useRecoilValue(selectedImgState);
  const gallery = useRecoilValue(galleryState);
  const [data, setData] = useRecoilState(resultDataState);
  const[foodCode, setFoodCode] = useRecoilState(foodCodeState);

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

  const handleResult = async () => {
    if (selectedImg >= 0 && file[selectedImg]) {
        console.log("선택된 파일:", file[selectedImg]);
        try {
            const nuetritionList = await sendClassification(file[selectedImg]);
            setData(nuetritionList);
            setFoodCode(nuetritionList.food_code);
            console.log("영양성분 목록:", nuetritionList);
            navigate("/carb-counting-result");
        } catch (error) {
            console.error("통신 중 오류 발생:", error);
        }
    } else {
        console.log("유효한 이미지가 선택되지 않았습니다.");
    }
};

  return (
    <>
      <ButtonContainer>
        <StandardButton
          title="사진 찍기"
          width="18.7rem"
          height="4rem"
          onClick={handleTakePicture}
        />
        <StandardButton
          title="사진 등록"
          width="18.7rem"
          height="4rem"
          onClick={handleOpenModal}
        />
      </ButtonContainer>

      <Title>업로드한 사진</Title>
      <CameraContainer>
        {!isCameraActive &&
          (selectedImg !== null && selectedImg >= 0 && selectedImg < file.length ? (
            <SelectedComponent />
          ) : (
            <DefaultComponent>
              <DefaultIcon src={bread} alt="bread" fetchPriority="high"/>
              <DefaultAleart>아직 업로드한 사진이 없어요.</DefaultAleart>
            </DefaultComponent>
          ))}
        {isCameraActive && (
          <CameraComponent onRetake={() => setIsCameraActive(false)} />
        )}
      </CameraContainer>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      <div style={{ padding: "2.4rem 2rem 0 2rem" }}>
        <StandardButton title="탄수화물 함량 확인하기" onClick={handleResult} />
      </div>
      <div style={{ padding: "4rem 2rem 0 2rem"}}>
        <RuleContainer/>
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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.6rem;
`;

const DefaultIcon = styled.img`
  width: 13rem;
  height: 13rem;
`;

const DefaultAleart = styled.div`
  color: var(--Gray4, #babec0);
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export default ChoosePic;
