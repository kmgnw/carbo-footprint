import { atom } from "recoil";

export const augustState = atom({
    key: 'augustState',
    default: new Array(31).fill(null).map(() => ([
        {
            title: '',
            firstMeal: [],
            secondMeal: [],
            thirdMeal: [],
            extraMeal: [],
            workoutTime: '',
            stepCount: ''
        }
    ]))
});

export const septemberState = atom({
    key: 'septemberState',
    default: new Array(31).fill(null).map(() => ([{
        title: '',
        firstMeal: [],
        secondMeal: [],
        thirdMeal: [],
        extraMeal: [],
        workoutTime: '',
        stepCount: ''
    }]))
});

export const crntClickedDayState = atom({
    key: 'crntClickedDayState',
    default: -1
})

export const crntClickedMonthState = atom({
    key: 'crntClickedMonthState',
    default: 8
})

export const crntClickedIndexOfSchedulesState= atom({
    key: 'crntClickedIndexOfSchedulesState',
    default: -1
})