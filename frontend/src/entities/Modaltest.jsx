import React from 'react';
import styled from 'styled-components';
import X from '../../../assets/X.svg';

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  // 랜덤 이미지를 위한 배열 생성
  const images = Array.from({ length: 20 }, (_, index) => `https://picsum.photos/200?random=${index}`);

  return (
    <ModalOverlay>
      <StyledWrap>
        <StyledHeader>
          <div style={{ width: '24px' }} />
          <StyledTitle>사진 등록</StyledTitle>
          <StyledButton onClick={onClose}>
            <img src={X} alt="close" />
          </StyledButton>
        </StyledHeader>

        <SubTitle>등록된 사진</SubTitle>
        <GalleryContainer>
          {images.map((src, index) => (
            <Img key={index} src={src} alt={`random-img-${index}`} />
          ))}
        </GalleryContainer>

        <ButtonContainer></ButtonContainer>
      </StyledWrap>
    </ModalOverlay>
  );
}

const ModalOverlay = styled.div`
  position: fixed;
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
  margin: 2rem 0 0 2rem;
`;

const GalleryContainer = styled.div`
  width: 34rem;
  height: 25rem;
  margin: 0.6rem 2rem 1.5rem 2rem;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
`;

const ButtonContainer = styled.div`
  width: 34rem;
  margin: 0 2rem 2rem 2rem 2rem;
`;

const Img = styled.img`
  flex: 1 0 30%; /* Each image takes up 30% of the row width */
  max-width: 30%; /* Prevent images from growing too large */
  margin: 0.5rem;
  height: 10.8rem;
  border-radius: 8px;
  object-fit: cover;
`;

export default Modal;