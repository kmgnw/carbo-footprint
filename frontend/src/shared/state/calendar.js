import { atom } from "recoil";

export const augustState = atom({
    key: 'augustState',
    default: new Array(31).fill(['일정여섯글자까지만'])
})

export const septemberState = atom({
    key: 'septemberState',
    default: new Array(30).fill([])
})