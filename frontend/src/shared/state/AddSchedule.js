import { atom } from "recoil";

export const newScheduleState = atom({
    key: 'newScheduleState',
    default: {
        firstMeal: [],
        secondMeal: [],
        thirdMeal: [],
        extraMeal: [],
    }
})