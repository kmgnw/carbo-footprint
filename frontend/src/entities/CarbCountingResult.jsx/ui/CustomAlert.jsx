import React from 'react';
import styled from 'styled-components';
import icon from '../../../assets/toastIcon.svg';

const AlertWrapper = styled.div`
  height: 3.5rem;
  padding: 1rem;
  margin: 0 2rem;
  border-radius: 8px;
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--Primary-color1, #EF6038);
  background: var(--White, #FFF);
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.20);
  gap: 0.3rem;
`;

const Img = styled.img`
  width: 2rem;
  height: 2rem;
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
`;

const Message = styled.div`
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
  font-family: "Noto Sans KR";
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const CustomAlert = ({ message, visible, success }) => {
  return (
    <AlertWrapper visible={visible} success={success}>
      <Img src={icon} alt="icon" />
      <Message>{message}</Message>
    </AlertWrapper>
  );
};

export default CustomAlert;
