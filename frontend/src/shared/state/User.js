import { atom } from "recoil";

export const userInfoState = atom({
    key: 'userInfoState',
    default: {
        userId:"",
        flag: 0
    }
})

export const userTokenState = atom({
    key:'userTokenState',
    default:""
})