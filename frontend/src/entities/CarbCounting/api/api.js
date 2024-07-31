import { baseUrl } from "../../../shared/config/baseurl";

export async function sendClassification(file) {
    try {
        const formData = new FormData();
        formData.append('image', file);

        const response = await fetch(`${baseUrl}/api/classification`, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || '문제가 발생했습니다.');
        }

        const responseData = await response.json();
        console.log(responseData.result);
        return responseData.result;

    } catch (error) {
        console.error('통신 중 오류 발생:', error);
        throw error;
    }
}
