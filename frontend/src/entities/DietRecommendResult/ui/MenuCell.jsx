import styled from "styled-components"

function MenuCell({ title, img, categories, calories, carb, sugar }) {
    return (
        <MainLayout>

            <ImgWrap src={img} fetchPriority="high" alt="img"/>

            <TextWrap>

                <StyledCategoryWrap>

                    {categories.slice(0,3).map((e) => (
                        <StyledCategoryContainer>
                            <StyledCategory>
                                {e}
                            </StyledCategory>
                        </StyledCategoryContainer>
                    ))}

                </StyledCategoryWrap>

                <Title>{title}</Title>

                <NutritionInfoWrap>

                    <StyledCalories>
                        {calories}kcal
                    </StyledCalories>


                    <SubNutritionWrap>
                        <StyledSubNutrition>
                            탄수화물{carb}g
                        </StyledSubNutrition>


                        <StyledSubNutrition>
                            당 {sugar}g
                        </StyledSubNutrition>

                    </SubNutritionWrap>

                </NutritionInfoWrap>

            </TextWrap>

        </MainLayout>
    )
}

export default MenuCell

const MainLayout = styled.div`
width: 100%;
height: 15rem;
padding: 1rem 1.4rem;
background-color: white;
display: flex;
gap: 1.6rem;
border-radius: 0.8rem;
background: #FFF;
box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.20);
margin-bottom: 0.8rem
`

const ImgWrap = styled.img`
min-width: 12.9rem;
height: 12.9rem;
background-color: lightgrey;
border-radius: 0.8rem
`

const TextWrap = styled.div`
width: 100%;
`

const StyledCategoryWrap = styled.div`
display: flex;
gap: 0.4rem;
margin-bottom: 0.8rem
`

const StyledCategoryContainer = styled.div`
border-radius: 0.4rem;
background-color: #404345;
padding: 0.6rem 0.9rem
`


const StyledCategory = styled.div`
color: #FFF;
text-align: center;
font-family: "Noto Sans KR";
font-size: 1rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`

const Title = styled.div`
color: #262829;
font-family: "Noto Sans KR";
font-size: 1.6rem;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: 4.6rem
`

const NutritionInfoWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const StyledCalories = styled.div`
color: #EF6038;
font-family: "Noto Sans KR";
font-size: 2rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`

const StyledSubNutrition = styled.div`
color: #BABEC0;
font-family: "Noto Sans KR";
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: normal;
`

const SubNutritionWrap = styled.div`
display: flex;
gap: 0.8rem;
`