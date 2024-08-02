import { baseUrl } from "../../../shared/config/baseurl";

export function sendPreferences(newAllergyType, newEatingHabitType, setRecommendedResult) {
    const token = window.sessionStorage.getItem('token')
    console.log(newAllergyType, newEatingHabitType)
    fetch(`${baseUrl}/api/foods/recommend`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
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