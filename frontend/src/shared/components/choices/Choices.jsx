import styled, { css } from 'styled-components';
import { useRecoilState } from 'recoil';
import './Choices.css';
import { newScheduleState } from '../../state/AddSchedule';

function Choices({ title, choices, type }) {
    const [crntSchedule, setCrntSchedule] = useRecoilState(newScheduleState);

    function choiceClickedHandler(choice) {
        setCrntSchedule((prev) => {
            if (prev[type]?.includes(choice)) {
                return {
                    ...prev,
                    [type]: prev[type].filter((item) => item !== choice),
                };
            } else {
                return {
                    ...prev,
                    [type]: [...prev[type], choice],
                };
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
                    const isSelected = crntSchedule[type]?.includes(choice);
                    const cn = isSelected ? 'ob_choice-selected' : 'ob_choice';
                    const cnTitle = isSelected ? 'ob_title-selected' : 'ob_title';
                    return (
                        <ChoiceWrapper
                            key={index}
                            className={cn}
                            onMouseDown={() => choiceClickedHandler(choice)}
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
  cursor:pointer;
  &:hover {
    transform: scale(1.1);
    background-color: #EF6038;
    color: white;
  }
`;

const ChoiceWrapper = styled.div`
@media (hover: hover) {
	${hoverGrow}
}
`;

export default Choices;