import { useEffect, useState } from 'react'
import './Choices.css'

function Choices({ title, choices }) {

    const [crntType, setCrntType] = useState([])

    function choiceClickedHandler(choice) {
        setCrntType(choice)
    }
    
    return (
        <div>
            <div className="ob_title-wrap">
                <div className="ob_choices-title">
                    {title}
                </div>
                <div className="ob_subtitle">
                    (중복 선택 가능)
                </div>
            </div>

            <div className='ob_choices-wrap'>
                {choices.map((choice, index) => {
                    const cn = crntType.includes(choice) ? 'ob_choice-selected' : 'ob_choice';
                    return (
                        <div key={index} className={cn} onClick={(e) => choiceClickedHandler(e.target.textContent)}>
                            <div className='ob_choice-title'>
                                {choice}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Choices;
