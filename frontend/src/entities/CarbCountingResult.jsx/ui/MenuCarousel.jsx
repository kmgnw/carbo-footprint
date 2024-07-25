import React, { useState, useEffect } from "react";
import styled from "styled-components";

function MenuCarousel() {
  const [menu, setMenu] = useState([
    {
      name: "메뉴 이름",
      amount: "100",
      calorie: "000",
      carb: "000",
      prot: "000",
      fat: "000",
      etc: "000",
    },
    {
      name: "메뉴 이름",
      amount: "100",
      calorie: "000",
      carb: "000",
      prot: "000",
      fat: "000",
      etc: "000",
    },
    {
      name: "메뉴 이름",
      amount: "100",
      calorie: "000",
      carb: "000",
      prot: "000",
      fat: "000",
      etc: "000",
    },
    {
      name: "메뉴 이름",
      amount: "100",
      calorie: "000",
      carb: "000",
      prot: "000",
      fat: "000",
      etc: "000",
    },
    {
      name: "메뉴 이름",
      amount: "100",
      calorie: "000",
      carb: "000",
      prot: "000",
      fat: "000",
      etc: "000",
    },
  ]);

  //   useEffect(() => {
  //     const fetchNutrients = async () => {
  //       try {
  //         const response = await axios.get('');
  //         setNutrients(response.data);
  //       } catch (error) {
  //         console.error('Failed to fetch nutrients', error);
  //       }
  //     };

  //     fetchNutrients();
  //   }, []);

  return (
    <CarouselWrapper>
      {menu.map((menu, index) => (
        <CarouselContent key={index}>
          <ContentWrapper>
            <IntroContainer>
              <MenuName>{menu.name}</MenuName>
              <MenuAmount>1인분&nbsp;{menu.amount}g</MenuAmount>
            </IntroContainer>

            <CalorieWrapper>
              <div>
                <Font style={{ color: "#262829", fontSize: "1.4rem" }}>
                  총 칼로리
                </Font>
                <Font>탄수화물</Font>
                <Font>단백질</Font>
                <Font>지방</Font>
                <Font>기타</Font>
              </div>

              <div>
                <Font
                  style={{
                    color: "#262829",
                    fontSize: "1.4rem",
                    fontWeight: "700",
                  }}
                >
                  {menu.calorie}kcal
                </Font>
                <Font>{menu.carb}g</Font>
                <Font>{menu.prot}g</Font>
                <Font>{menu.fat}g</Font>
                <Font>{menu.etc}g</Font>
              </div>
            </CalorieWrapper>
          </ContentWrapper>
        </CarouselContent>
      ))}
    </CarouselWrapper>
  );
}

export default MenuCarousel;

const CarouselWrapper = styled.div`
  display: flex;
  margin-top: 0.8rem;
  height: 20rem;
  padding: 0 2rem;
  gap: 0.8rem;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none; /* Hide the scrollbar */
  }
`;

const CarouselContent = styled.div`
  height: 17.9rem;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
  padding: 1.2rem 1rem;
`;

const ContentWrapper = styled.div`
  width: 27.2rem;
`;

const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.2rem;
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 1.6rem;
`;

const MenuName = styled.div`
  color: var(--Gray8, #262829);
  font-family: "Noto Sans KR";
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const MenuAmount = styled.div`
  color: var(--Gray5, #7d7f82);
  font-family: "Noto Sans KR";
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Font = styled.div`
  color: #7d7f82;
  font-family: "Noto Sans KR";
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 0.6rem;
`;

const CalorieWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
`;
