import styled from "styled-components"
import StandardButton from "../../../shared/components/StandardButton/StandardButton"

function SectionContent({title, buttonText, onClick}){
    return(
    <MainLayout>

        <Title>{title}</Title>

            <StandardButton
            title={buttonText}
            padding="1.2rem 2.3rem"
            onClick={onClick}
            />

    </MainLayout>
    )
}

export default SectionContent

const MainLayout = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
height: 8rem;
padding: 2rem;
background: linear-gradient(264deg, #EF6038 46.36%, #E83E0F 106.23%);
`

const Title = styled.div`
color: #FFF;
font-family: "Pretendard Variable";
font-size: 1.6rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`

const ButtonWrap = styled.div`
padding: 1.2rem 3rem;
background-color: black;
color: #FFF;
border-radius: 0.8rem;
text-align: center;
font-family: "Noto Sans KR";
font-size: 1.6rem;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 24px */
`