import { baseUrl } from "../../../shared/config/baseurl"; // API base URL

export async function sendQuestion(isRecommend, question) {
    try {
        const response = await fetch(`${baseUrl}/api/chatbot`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                isRecommend: isRecommend,
                question: question,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error sending question:", error);
        throw error;
    }
}
