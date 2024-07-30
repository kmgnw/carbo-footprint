import { baseUrl } from "../../../shared/config/baseurl";

export const fetchRooms = async (setRooms) => {
    const token = window.sessionStorage.getItem('token')
    
    try {
        const response = await fetch(`${baseUrl}/api/chat/rooms`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data.result)
        setRooms(data.result)
        
    } catch (error) {
        console.error(error);
    }
};