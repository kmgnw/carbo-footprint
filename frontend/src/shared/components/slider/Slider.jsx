import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import banner1 from '../../../assets/banner1.svg';
import banner2 from '../../../assets/banner2.svg';
import banner3 from '../../../assets/banner3.svg';
import { useNavigate } from 'react-router-dom';

function Slider() {
    const contentWrapRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);

    const images = [
        { src: banner1, onClick: () => navigate('/chatbot') },
        { src: banner2, onClick: () => navigate('/carb-counting') },
        { src: banner3, onClick: () => navigate('/contributor') }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [images.length]);

    useEffect(() => {
        if (contentWrapRef.current) {
            const scrollWidth = contentWrapRef.current.offsetWidth;
            contentWrapRef.current.style.transform = `translateX(-${currentIndex * scrollWidth}px)`;
        }
    }, [currentIndex]);

    const handleTouchStart = (e) => {
        setTouchStartX(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEndX(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStartX - touchEndX > 50) {
            // swipe left
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }

        if (touchStartX - touchEndX < -50) {
            // swipe right
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        }
    };

    return (
        <MainLayout>
            <ContentWrap
                ref={contentWrapRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={`Banner ${index + 1}`}
                        onClick={image.onClick}
                        fetchpriority="high"
                    />
                ))}
            </ContentWrap>
            <Dots>
                {images.map((_, index) => (
                    <Dot key={index} active={currentIndex === index} />
                ))}
            </Dots>
        </MainLayout>
    );
}

export default Slider;

const MainLayout = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
`;

const ContentWrap = styled.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: 100%;
    & > img {
        flex: 0 0 100%;
        width: 100%;
        cursor: pointer;  /* Add cursor pointer to indicate clickability */
        fetchpriority: high;
    }
`;

const Dots = styled.div`
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 5px;
    align-items: center;
`;

const Dot = styled.div`
    width: ${props => (props.active ? '1rem' : '0.6rem')};
    height: ${props => (props.active ? '1rem' : '0.6rem')};
    background-color: ${props => (props.active ? 'white' : '#D4D6D7')};
    border-radius: 50%;
`;