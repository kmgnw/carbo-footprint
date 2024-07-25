import styled from "styled-components";
import { hoverGrow } from '../../animation/hoverGrow'

function StandardButton({ width, height, title, onClick, backgroundColor="black", color='white', padding='1.4rem 1.8rem'}) {
    return (
        <MainLayout
        width={width}
        height={height}
        onClick={onClick}
        backgroundColor={backgroundColor}
        padding={padding}
        >
            <Title
            color={color}
            >
                {title}
            </Title>
        </MainLayout>
    );
}

export default StandardButton;

const MainLayout = styled.div`
width: ${({ width }) => width};
background-color: ${({ backgroundColor }) => backgroundColor};
border-radius: 8px;
${hoverGrow};
padding: ${({padding})=> padding};
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
height: 100%;
`;

const Title = styled.div`
color: ${({ color }) => color};
text-align: center;
font-family: "Noto Sans KR";
font-size: 1.6rem;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 24px */
` 