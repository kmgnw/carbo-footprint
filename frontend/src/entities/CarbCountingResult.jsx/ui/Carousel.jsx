import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Carousel() {
  const [nutrients, setNutrients] = useState([
    { name: "단백질", amount: "100" },
    { name: "탄수화물", amount: "80" },
    { name: "dsfdsf", amount: "324" },
    { name: "fvdds", amount: "34" },
    { name: "단백질", amount: "100" },
    { name: "탄수화물", amount: "80" },
    { name: "dsfdsf", amount: "324" },
    { name: "fvdds", amount: "34" },
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
      {nutrients.map((nutrient, index) => (
        <CarouselContent key={index}>
          <ContentWrapper>
            <FontContainer>{nutrient.name}</FontContainer>
            <FontContainer style={{ fontSize: "2.4rem" }}>
              {nutrient.amount}
              <Unit>g</Unit>
            </FontContainer>
          </ContentWrapper>
        </CarouselContent>
      ))}
    </CarouselWrapper>
  );
}

export default Carousel;

const CarouselWrapper = styled.div`
  display: flex;
  margin-top: 0.8rem;
  height: 10rem;
  padding: 0 2rem 0 2rem;
  gap: 0.4rem;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none; /* Hide the scrollbar */
  }
`;

const CarouselContent = styled.div`
  width: 12rem;
  height: 8.3rem;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
`;

const FontContainer = styled.div`
  margin-top: 0.8rem;
  display: flex;
  align-items: flex-end;
  color: var(--Gray8, #262829);
  font-family: "Noto Sans KR";
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Unit = styled(FontContainer)`
  font-size: 1.4rem;
`;

// const CarouselWrapper = styled.div`
//   display: flex;
//   overflow-x: scroll;
//   scroll-snap-type: x mandatory;
// `;

const NutrientName = styled.div`
  color: var(--Gray8, #262829);
  font-family: "Noto Sans KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const NutrientAmount = styled.div`
  font-size: 16px;
`;

const ContentWrapper = styled.div`
  margin: 1rem;
  width: 12rem;
`;
