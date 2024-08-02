import { atom } from "recoil";
import foodImg1 from '../../assets/food1.jpeg';
import foodImg2 from '../../assets/food2.jpeg';
import foodImg3 from '../../assets/food3.jpeg';
import foodImg4 from '../../assets/food4.jpeg';

const createFileFromUrl = async (url, name) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return new File([blob], name, { type: blob.type });
};

const food1 = await createFileFromUrl(foodImg1, 'foodImg1.jpeg');
const food2 = await createFileFromUrl(foodImg2, 'foodImg2.jpeg');
const food3 = await createFileFromUrl(foodImg3, 'foodImg3.jpeg');
const food4 = await createFileFromUrl(foodImg4, 'foodImg4.jpeg');


//이미지 url 상태관리
export const galleryState = atom({
    key: 'galleryState',
    default: [foodImg1, foodImg2, foodImg3, foodImg4]
});

//파일객체 상태관리
export const fileState = atom({
    key: 'fileState',
    default: [food1, food2, food3, food4]
});

export const selectedImgState = atom({
    key: 'selectedImgState',
    default: -1
});

export const resultDataState = atom({
    key: 'resultDataState',
    default: null
})

export const foodCodeState = atom({
    key: 'foodCodeState',
    default: null
})