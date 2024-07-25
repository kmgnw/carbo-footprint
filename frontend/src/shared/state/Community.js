import { atom } from "recoil";

export const RoomState = atom({
    key: 'RoomState',
    default: [
        {
            title: '방1',
            count: '9',
        },
        {
            title: '방2',
            count: '12',
        },
        {
            title: '방3',
            count: '11',
        },
        {
            title: '방4',
            count: '1',
        },
    ]
})