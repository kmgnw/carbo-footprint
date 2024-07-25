import styled from "styled-components"
import Choices_nonclickable from "../../../shared/components/choices_nonclickable/Choices_nonclickable";
import StandardButton from "../../../shared/components/StandardButton/StandardButton";
import imageSection from '../../../assets/imageSection.png'

function CarbCountingResultCell() {
    return (
        <MainLayout>

            <DateWrap>
                <DateContainer>
                    00.00.0요일
                </DateContainer>

            </DateWrap>
            <ContentWrap>

                <ContentContainer>

                    <img src={imageSection} />

                    <TextWrap>
                        <Desc>총 00개의 음식</Desc>
                        <Title>총 000Kcal</Title>
                    </TextWrap>

                </ContentContainer>

                <StandardButton
                    title='자세히보기'
                    padding="1.2rem 2.1rem"
                />
            </ContentWrap>

        </MainLayout>
    )
}

export default CarbCountingResultCell

const MainLayout = styled.div`
display: flex;
flex-direction: column;
gap: 1.6rem;
padding: 1.6rem;
border-radius: 1.6rem;
background: #F2F3F5;
box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.20);
`

const DateWrap = styled.div``

const DateContainer = styled.div`
display: inline-block;
background-color :#BABEC0;
color: #FFF;
font-family: "Noto Sans KR";
font-size: 1rem;
font-style: normal;
font-weight: 500;
text-align: center;
line-height: normal;
border-radius: 2rem;
padding: 0.4rem 0.8rem;
`

const ContentWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const ContentContainer = styled.div`
display: flex;
align-items: center;
gap: 1.6rem;
`

const TextWrap = styled.div`

`

const Desc = styled.div`
color: #7D7F82;
font-family: "Noto Sans KR";
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-bottom: 0.4rem;
`

const Title = styled.div`
color: #262829;
font-family: "Noto Sans KR";
font-size: 1.4rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`