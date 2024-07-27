import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import banner1 from '../../../assets/banner1.svg';
import banner2 from '../../../assets/banner2.svg';
import banner3 from '../../../assets/banner3.svg';
import { useNavigate } from 'react-router-dom';

function Slider() {
    const contentWrapRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate()

    const images = [
        { src: banner1, onClick: () => navigate('/chatbot') },
        { src: banner2, onClick: () => navigate('/carb-counting') },
        { src: banner3, onClick: () => navigate('/contributor') }
    ];

    const handleScroll = () => {
        if (contentWrapRef.current) {
            const scrollPosition = contentWrapRef.current.scrollLeft;
            const scrollWidth = contentWrapRef.current.offsetWidth;
            const index = Math.round(scrollPosition / scrollWidth) % images.length;
            setCurrentIndex(index);
        }
    };

    useEffect(() => {
        const contentWrap = contentWrapRef.current;
        if (contentWrap) {
            contentWrap.addEventListener('scroll', handleScroll);
            return () => contentWrap.removeEventListener('scroll', handleScroll);
        }
    }, []);

    useEffect(() => {
        if (contentWrapRef.current) {
            const scrollWidth = contentWrapRef.current.offsetWidth;
            contentWrapRef.current.scrollLeft = currentIndex * scrollWidth;
        }
    }, [currentIndex]);

    const handleTransitionEnd = () => {
        if (contentWrapRef.current) {
            const scrollWidth = contentWrapRef.current.offsetWidth;
            const maxScroll = scrollWidth * (images.length - 1);
            if (contentWrapRef.current.scrollLeft >= maxScroll) {
                contentWrapRef.current.scrollLeft = 0;
            }
        }
    };

    return (
        <MainLayout>
            <ContentWrap ref={contentWrapRef} onTransitionEnd={handleTransitionEnd}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={`Banner ${index + 1}`}
                        onClick={image.onClick}
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
    overflow-x: scroll;
    scroll-behavior: smooth;
    width: 100%;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {
        display: none;  /* Chrome, Safari, and Opera */
    }
    & > img {
        flex: 0 0 100%;
        width: 100%;
        cursor: pointer;  /* Add cursor pointer to indicate clickability */
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