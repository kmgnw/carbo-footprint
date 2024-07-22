import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

function CameraComponent({ onRetake }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [canvasState, setCanvasState] = useState('none');
  const [cameraState, setCameraState] = useState('');

  useEffect(() => {
    getWebcam(stream => {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    });
  }, []);

  const getWebcam = (callback) => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      .then(callback)
      .catch(err => console.error('Error accessing webcam:', err));
  };

  const goToCamera = () => {
    if (canvasRef.current && videoRef.current) {
      const context = canvasRef.current.getContext('2d');
      context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(-1, 1);
      context.translate(-canvasRef.current.width, 0);

      context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);

      setCanvasState('none');
      setCameraState('');
      getWebcam(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      });
    }
  };

  const takeScreenshot = () => {
    if (canvasRef.current && videoRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
  
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;

      context.clearRect(0, 0, canvas.width, canvas.height);

      context.scale(-1, 1);
      context.translate(-canvas.width, 0);

      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

      setCanvasState('');
      setCameraState('none');

      canvas.toBlob(blob => {
        const file = new File([blob], 'tantanmen.jpg', { type: 'image/jpeg' });
        console.log('File created:', file);
      }, 'image/jpeg');

      const image = canvas.toDataURL('image/jpeg');
      const link = document.createElement('a');
      link.href = image;
      link.download = '탄수발자국.jpg';
      link.click();

      const stream = videoRef.current.srcObject;
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    }
  };

  return (
    <Container>
      <StyledVideo
        ref={videoRef}
        autoPlay
        style={{ display: cameraState, width: '100%', height: '100%', transform: 'scaleX(-1)' }}
      />
      <StyledCanvas
        ref={canvasRef}
        style={{ display: canvasState, width: '100%', height: '100%' }}
      />
      {canvasState === 'none' ? (
        <ActionButton onClick={takeScreenshot}>
          <InnerButton />
        </ActionButton>
      ) : (
        <ActionButton onClick={goToCamera}>
          <p>다시 촬영</p>
        </ActionButton>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 16px;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
`;

const StyledCanvas = styled.canvas`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
`;

const ActionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  margin: 10px;
  border-radius: 100px;
  position: absolute;
  z-index: 101;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  background-color: white;
`;

const InnerButton = styled.div`
  text-align: center;
  width: 60px;
  height: 60px;
  border: 2px solid;
  border-radius: 100px;
`;

export default CameraComponent;
