import { baseUrl } from "../../../shared/config/baseurl";

export async function saveClassification(file, code) {
    try {
        const token = sessionStorage.getItem('token');
        const formData = new FormData();
        formData.append('image', file);
        formData.append('food_code', code);

        const response = await fetch(`${baseUrl}/api/classification/save`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || '문제가 발생했습니다.');
        }

        const responseData = await response.json();
        console.log(responseData);
        return responseData;

    } catch (error) {
        console.error('통신 중 오류 발생:', error);
        throw error;
    }
}
