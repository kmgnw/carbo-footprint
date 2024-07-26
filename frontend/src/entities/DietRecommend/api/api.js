import { baseUrl } from "../../../shared/config/baseurl";

export function sendPreferences(newAllergyType, newEatingHabitType, setRecommendedResult) {
    return fetch(`${baseUrl}/foods/recommend`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "allergen_list": newAllergyType,
            "preference_list": newEatingHabitType
        })
    })
    .then(res => {
        if (!res.ok) {
            return res.json().then(error => {throw new Error(error.detail)});
        }
        return res.json();
    })
    .then(data=>{
        console.log(data.result.food_list)
        setRecommendedResult(data.result.food_list)
    })
}