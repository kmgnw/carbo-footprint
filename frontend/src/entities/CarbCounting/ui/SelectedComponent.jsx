import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { selectedImgState } from '../../../shared/state/Gallery';

function SelectedComponent() {
  const selectedImg = useRecoilValue(selectedImgState);
  return <Img src={selectedImg} alt="Selected" />;
}

export default SelectedComponent;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px
`;
