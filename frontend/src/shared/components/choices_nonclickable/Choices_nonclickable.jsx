import styled from "styled-components"
import check from '../../../assets/NotPickCheck_grey.svg'

function Choices_nonclickable({
    allergies,
    allergy_free = false,
    eatingHabits,
    eatingHabits_free = false
}) {
    return (
        <MainLayout>

            <AllergyHeading>
                알레르기
            </AllergyHeading>

            <AllergyWrap>
                {allergy_free ? (
                    <>hello</>
                ) : (
                    allergies.map((e, index) => (
                        <AllergyContainer key={index}>
                            <AllergyTitle>{e}</AllergyTitle>
                        </AllergyContainer>
                    ))
                )}
            </AllergyWrap>

            <AllergyHeading>
                식습관
            </AllergyHeading>


            {eatingHabits_free ? (

                <NotPickyContainer>

                    <NotPickyTitle>
                        가리는 것 없음
                    </NotPickyTitle>

                    <img src={check} />

                </NotPickyContainer>

            ) : (
                eatingHabits.map((e, index) => (
                    <AllergyWrap>
                        <AllergyContainer key={index}>
                            <AllergyTitle>{e}</AllergyTitle>
                        </AllergyContainer>
                    </AllergyWrap>
                ))
            )}


        </MainLayout>
    )
}

export default Choices_nonclickable

const MainLayout = styled.div`
width: 100%;
`

const AllergyHeading = styled.div`
color:#262829;
font-family: "Noto Sans KR";
font-size: 1.6rem;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom:0.8rem;
`

const AllergyWrap = styled.div`
display: grid;
gap: 0.8rem;
grid-template-columns: repeat(4, 1fr);
margin-bottom: 1.6rem;

@media (max-width: 428px) {
    grid-template-columns: repeat(3, 1fr);
}

@media (max-width: 328px) {
    grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 228px) {
    grid-template-columns: 1fr;
}
`

const AllergyContainer = styled.div`
width: 100%;
height: 4rem;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50px;
background: #E3E5E7;
`

const AllergyTitle = styled.div`
color: #7D7F82;
text-align: center;
font-family: "Pretendard Variable";
font-size: 1.2rem;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 18px */
`

const NotPickyContainer = styled.div`
width: 100%;
padding: 1.6rem 2rem;
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 16px;
background: var(--Gray2, #E3E5E7);
`

const NotPickyTitle = styled.div`
color: #7D7F82;
font-family: "Noto Sans KR";
font-size: 1.2rem;
font-style: normal;
font-weight: 700;
line-height: 150%; /* 18px */
`