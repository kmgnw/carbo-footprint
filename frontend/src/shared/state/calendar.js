import { atom } from "recoil";

export const augustState = atom({
    key: 'augustState',
    default: new Array(31).fill([])
})

export const septemberState = atom({
    key: 'septemberState',
    default: new Array(30).fill([])
})