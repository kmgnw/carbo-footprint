import styled, { css } from 'styled-components';
import { useRecoilState } from 'recoil';
import { newAllergyTypeState, newEatingHabitTypeState } from '../../../shared/state/DietRecommend';
import { useEffect, useState } from 'react';

function Choices({ title, choices, type }) {
    const [newAllergyType, setNewAllergyType] = useRecoilState(newAllergyTypeState);
    const [newEatingHabitType, setNewEatingHabitType] = useRecoilState(newEatingHabitTypeState);
    
    const [crntType, setCrntType] = useState([]);

    useEffect(() => {
        switch (type) {
            case 'allergy':
                setCrntType(newAllergyType);
                break;
            case 'eating-habit':
                setCrntType(newEatingHabitType);
                break;
            default:
                break;
        }
    }, [type, newAllergyType, newEatingHabitType]);

    function choiceClickedHandler(choice) {
        setCrntType((prev) => {
            let updatedType;
            if (choice === '가리는 것 없음') {
                updatedType = [choice];
            } else {
                if (prev.includes(choice)) {
                    updatedType = prev.filter((e) => e !== choice);
                } else {
                    updatedType = prev.filter((e) => e !== '가리는 것 없음');
                    updatedType = [...updatedType, choice];
                }
            }

            if (type === 'allergy') {
                setNewAllergyType(updatedType);
            } else if (type === 'eating-habit') {
                setNewEatingHabitType(updatedType);
            }

            return updatedType;
        });

        console.log(newAllergyType)
        console.log(newEatingHabitType)
    }

    return (
        <Container>
            {/* <TitleWrap>
                <ChoicesTitle>
                    {title}
                </ChoicesTitle>
            </TitleWrap> */}
            <ChoicesWrap>
                {choices.map((choice, index) => {
                    const isSelected = crntType.includes(choice);
                    const ChoiceComponent = isSelected ? SelectedChoice : Choice;
                    const ChoiceTitleComponent = isSelected ? SelectedTitle : Title;

                    return (
                        <ChoiceComponent
                            key={index}
                            onMouseDown={() => choiceClickedHandler(choice)}
                        >
                            <ChoiceTitleComponent>
                                {choice}
                            </ChoiceTitleComponent>
                        </ChoiceComponent>
                    );
                })}
            </ChoicesWrap>
        </Container>
    );
}

const hoverGrow = css`
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
    background-color: #EF6038;
    color: white;
  }
`;

const Container = styled.div``;

const TitleWrap = styled.div`
    display: flex;
    margin-top: 1.6rem;
`;

const ChoicesTitle = styled.div`
    color: #262829;
    font-family: "Noto Sans KR";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const ChoicesWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.8rem;

    @media (max-width: 428px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 328px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 228px) {
        grid-template-columns: 1fr;
    }

`;

const Choice = styled.div`
    ${hoverGrow}
    width: 9.2rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5rem;
    background: #F2F3F5;
    color: #BABEC0;
`;

const SelectedChoice = styled(Choice)`
    background-color: #EF6038;
    color: #FFF;
`;

const Title = styled.div`
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const SelectedTitle = styled(Title)`
    color: #FFF;
`;

export default Choices;