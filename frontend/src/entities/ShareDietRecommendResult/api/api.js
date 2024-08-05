import { baseUrl } from "../../../shared/config/baseurl";

export const fetchDiet = async (diet_id, setShare) => {

    try {
        const response = await fetch(`${baseUrl}/api/foods/recommend/${diet_id}`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data.result)
        setShare(data.result)

    } catch (error) {
        console.error(error);
    }
};