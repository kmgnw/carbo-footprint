import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { resultDataState } from "../../../shared/state/Gallery";

function MenuCarousel() {
  const data = useRecoilValue(resultDataState);

  return (
      <CarouselContent>
          <IntroContainer>
            <MenuName>{data.name}</MenuName>
            <MenuAmount>1인분&nbsp;{data.amount}g</MenuAmount>
          </IntroContainer>

          <CalorieWrapper>
            <div>
              <Font style={{ color: "#262829", fontSize: "1.4rem" }}>
                총 칼로리
              </Font>
              <Font>탄수화물</Font>
              <Font>단백질</Font>
              <Font>지방</Font>
              <Font>당류</Font>
            </div>

            <div>
              <Font
                style={{
                  color: "#262829",
                  fontSize: "1.4rem",
                  fontWeight: "700",
                }}
              >
                {data.calorie}kcal
              </Font>
              <Font>{data.carb}g</Font>
              <Font>{data.prot}g</Font>
              <Font>{data.fat}g</Font>
              <Font>{data.sugar}g</Font>
            </div>
          </CalorieWrapper>
      </CarouselContent>
  );
}

export default MenuCarousel;

const CarouselContent = styled.div`
  width: 100%
  height: 17.9rem;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
  padding:  0.5rem 1.2rem 1rem;
  margin: 0.8rem 2rem 0rem 2rem;
`;

const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.2rem;
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 0.8rem;
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
