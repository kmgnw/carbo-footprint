import { atom } from "recoil";

export const recommendedResultState = atom({
    key: 'recommendedResultState',
    default: []
})

export const dietIdState = atom({
    key: 'dietIdState',
    default: -1
})

export const shareRecommendedResultState = atom({
    key: 'shareRecommendedResultState',
    default: []
})