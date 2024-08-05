import { baseUrl } from "../../../shared/config/baseurl";
import bannerImg from '../../../assets/banner1.svg'

export const fetchMyCommunity = async (setMyCommunity, setRooms) => {
    const token = window.sessionStorage.getItem('token');
    setMyCommunity([])
    try {
        const response = await fetch(`${baseUrl}/api/my-page/chat`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setRooms(data.result)
        setMyCommunity(data.result)
        
    } catch (error) {
        console.error(error);
    }
};

export const fetchDietRecommends = async (setDiets) => {
    const token = window.sessionStorage.getItem('token');
    
    try {
        const response = await fetch(`${baseUrl}/api/my-page/recommend`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data.result)
        setDiets(data.result)
        
    } catch (error) {
        console.error(error);
    }
};

export const fetchClassification = async (setClassification) => {
    const token = window.sessionStorage.getItem('token');
    
    try {
        const response = await fetch(`${baseUrl}/api/my-page/classification`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // setClassification(data.result)
        setClassification([
            {
                "date": "08.21.수요일",
                "image_url": bannerImg,
                "name": "잡채",
                "amount": 150,
                "calorie": 198.82,
                "carb": 37.47,
                "prot": 2.59,
                "fat": 4.7,
                "sugar": 2.99
              },
              {
                "date": "08.21.수요일",
                "image_url": bannerImg,
                "food_code": "11015001",
                "name": "잡채",
                "amount": 150,
                "calorie": 198.82,
                "carb": 37.47,
                "prot": 2.59,
                "fat": 4.7,
                "sugar": 2.99
              }
        ])
        
        
    } catch (error) {
        console.error(error);
    }
};

export const fetchAddictions = async (setAddiction) => {
    const token = window.sessionStorage.getItem('token');
    
    try {
        const response = await fetch(`${baseUrl}/api/my-page/addiction-test`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setAddiction(data.result)
        
        
    } catch (error) {
        console.error(error);
    }
};