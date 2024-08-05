import React, { useState } from 'react';
import styled from 'styled-components';
import close from '../../../assets/X.svg';
import X from '../../../assets/X.svg';
import { useRecoilState } from 'recoil';
import { fileState, galleryState,selectedImgState } from '../../../shared/state/Gallery';
import { hoverGrow } from '../../../shared/animation/hoverGrow';


function Modal({ isOpen, onClose }) {
  const [images, setImages] = useRecoilState(galleryState);
  const [selectedImg, setSelectedImage] = useRecoilState(selectedImgState);
  const [file, setFiles] = useRecoilState(fileState);
  

  const handleImageClick = (index) => {
    setSelectedImage(index);
    console.log("Selected index: " + index);
  };

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    
    const imageUrls = selectedFiles.map(file => URL.createObjectURL(file));
    
    setImages(prevGallery => [...prevGallery, ...imageUrls]);
    setFiles(prevFiles => [...prevFiles, ...selectedFiles]);
  };

  const handleButtonClick = () => {
    document.getElementById('file-input').click();

  };

  const handlePutImg = () => {
      onClose();
  };
 
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <StyledWrap>
        <StyledHeader>
          <div style={{ width: '24px' }} />
          <StyledTitle>사진 등록</StyledTitle>
          <StyledButton onClick={onClose}>
            <img src={X} alt="close" fetchPriority='high'/>
          </StyledButton>
        </StyledHeader>

        <SubTitle>내 탄수앨범</SubTitle>
        <GalleryContainer>
          {images.map((src, index) => (
            <Img
              key={index}
              src={src}
              alt={'내 이미지'}
              onClick={() => handleImageClick(index)}
              selected={index === selectedImg}
              fetchPriority='high'
            />
          ))}
        </GalleryContainer>

        <ButtonContainer>
          <CustomButton disabled={selectedImg.length == 0} onClick={handlePutImg}>선택한 사진 등록하기</CustomButton>
          <CustomButton onClick={handleButtonClick}>사진 불러오기</CustomButton>
          <input
            type="file"
            id="file-input"
            multiple
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </ButtonContainer>
      </StyledWrap>
    </ModalOverlay>
  );
}

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const StyledWrap = styled.div`
  background: #fff;
  border-radius: 8px;
  position: relative;
  width: 38rem;
  height: 43.2rem;
  box-sizing: border-box;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 49px;
  border-bottom: 1px solid #d9d9d9;
  padding: 0 16px;
`;

const StyledTitle = styled.div`
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
`;

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const SubTitle = styled(StyledTitle)`
  margin: 2rem 0 0 2.6rem;
`;

const GalleryContainer = styled.div`
  height: 25rem;
  margin: 0.6rem 2rem 1.5rem 2rem;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
`;

const CustomButton = styled.div`
  width: 43%;
  height: 4.8rem;
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${({ disabled }) => (disabled ? '#E3E5E7' : '#000')};
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  @media (max-width: 370px) {
    gap: 1rem;
    font-size: 14px;
  }
`;

const Img = styled.img`
  flex: 1 0 30%;
  max-width: 30%;
  margin: 0.5rem;
  height: 10.8rem;
  border-radius: 8px;
  object-fit: cover;
  cursor: pointer;
  border: ${({ selected }) => (selected ? '3px solid #EF6038' : 'none')};
  @media (hover: hover) {
	${hoverGrow}
    }

  @media (max-width: 378px) {
    flex: 1 0 45%;
    max-width: 45%;
  }

  @media (max-width: 320px) {
    flex: 1 0 90%;
    max-width: 90%;
  }
`;

export default Modal;
