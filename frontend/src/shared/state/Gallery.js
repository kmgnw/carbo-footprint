import { atom } from "recoil";
import randomImg from '../../assets/randomImage.png';
import randomImg2 from '../../assets/Check.svg';
import randomImg3 from '../../assets/PlusCircle.svg';
import randomImg4 from '../../assets/testImg.svg';

export const galleryState = atom({
    key: 'galleryState',
    default: [randomImg, randomImg2, randomImg3, randomImg4]
});

export const selectedImgState = atom({
    key: 'selectedImgState',
    default: []
});