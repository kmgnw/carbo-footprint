import { atom } from "recoil";

export const RoomState = atom({
    key: 'RoomState',
    default: [
    ]
})

export const crntClickedRoomIdState = atom({
    key: 'crntClickedRoomIdState',
    default: -1,
})