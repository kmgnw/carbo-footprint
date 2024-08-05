import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { galleryState, selectedImgState } from '../../../shared/state/Gallery';

function SelectedComponent() {
  const selectedImg = useRecoilValue(selectedImgState);
  const gallery = useRecoilValue(galleryState);


  return (<Img src={gallery[selectedImg]} alt='gallery' fetchPriority='high'/>);
}

export default SelectedComponent;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px
`;
