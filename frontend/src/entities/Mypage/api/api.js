import { baseUrl } from "../../../shared/config/baseurl";

export const fetchMyCommunity = async (setMyCommunity, setRooms) => {
    const token = window.sessionStorage.getItem('token');
    
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
        setClassification(data.result)
        
        
    } catch (error) {
        console.error(error);
    }
};