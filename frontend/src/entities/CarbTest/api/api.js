import { baseUrl } from "../../../shared/config/baseurl";

export async function saveTest(cnt) {

    const token = window.sessionStorage.getItem('token');

    try {
        const response = await fetch(`${baseUrl}/api/addiction-tests`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "check_count": cnt
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || '문제가 발생했습니다.');
        }

        const responseData = await response.json();
        console.log("console : "+responseData);

    } catch (error) {
        console.error('통신 중 오류 발생:', error);
        throw error;
    }
}
