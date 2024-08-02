import { baseUrl } from "../../../shared/config/baseurl";

export const postSchedule = async (newSchedule) => {
    return fetch(`${baseUrl}/api/schedules`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${window.sessionStorage.getItem('token')}`
        },
        body: JSON.stringify(newSchedule),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('일정등록완')
        console.log(data.result.schedule_id)
      })
      .catch((error) => {
          console.error('Error:', error);
      });
};

export function deleteSchedule(schedule_id, ) {
    const token = window.sessionStorage.getItem('token');
    const url = `${baseUrl}/api/schedules/${schedule_id}`;

    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`, // 필요한 경우 인증 헤더 추가
            'Content-Type': 'application/json'  // 필요에 따라 헤더 추가
        }
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(error => { throw new Error(error.detail); });
        }
        return response.json();
    })
    .then(data => {
        console.log('delete', data);
        return data;
    })
    .catch(error => {
        console.error('Error:', error.message);
        throw error;
    });
}
