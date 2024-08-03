import { baseUrl } from "../../../shared/config/baseurl";
import { isLogin } from "../../../shared/function/isLogin";

export const fetchRooms = async (setRooms) => {

    try {

        let headers = {
            // 'Content-Type': 'application/json'
        };
    
        if (isLogin()) {
            headers['Authorization'] = `Bearer ${window.sessionStorage.getItem('token')}`;
        }

        const response = await fetch(`${baseUrl}/api/chat/rooms`, {
            method: 'GET',
            headers: headers
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data.result);
        setRooms(data.result);

    } catch (error) {
        console.error(error);
    }
};

export const makeRoom = async (name, count, setCrntClickedId, setRooms, crntClickedRoomId) => {
    return fetch(`${baseUrl}/api/chat/room`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${window.sessionStorage.getItem('token')}`
        },
        body: JSON.stringify({
            "name": name,
            "max_capacity": count
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (data.isSuccess === true) {
                const newRoom = {
                    room_name: name,
                    count: count,
                    room_id: data.result.chat_room_id
                };
                setRooms((prev) => [
                    ...prev,
                    newRoom
                ]);
                console.log(data.result.chat_room_id);
                setCrntClickedId(data.result.chat_room_id);
                console.log(crntClickedRoomId);
            } else {
                alert(data.message);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};