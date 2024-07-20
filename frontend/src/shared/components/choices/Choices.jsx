import styled, { css } from 'styled-components';
import { useState } from 'react';
import './Choices.css';

function Choices({ title, choices }) {
    const [crntType, setCrntType] = useState([]);
    

    function choiceClickedHandler(choice) {
        setCrntType((prev) => {
            if (prev.includes(choice)) {
                return prev.filter(item => item !== choice);
            } else {
                return [...prev, choice];
            }
        });
    }


    return (
        <div>
            <div className="ob_title-wrap">
                <div className="ob_choices-title">
                    {title}
                </div>
            </div>

            <div className="ob_choices-wrap">
                {choices.map((choice, index) => {
                    const cn = crntType.includes(choice) ? 'ob_choice-selected' : 'ob_choice';
                    const cnTitle = crntType.includes(choice) ? 'ob_title-selected' : 'ob_title';
                    return (
                        <ChoiceWrapper
                            key={index}
                            className={cn}
                            onMouseDown={() => {
                                choiceClickedHandler(choice);
                            }}
                        >
                            <div className={cnTitle}>
                                {choice}
                            </div>
                        </ChoiceWrapper>
                    );
                })}
            </div>
        </div>
    );
}


const hoverGrow = css`
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
    background-color: #EF6038;
    color:white
  }
`;

const ChoiceWrapper = styled.div`
  ${hoverGrow}
`;

export default Choices;