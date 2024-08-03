import { baseUrl } from "../../../shared/config/baseurl";
import { isLogin } from "../../../shared/function/isLogin";

export function sendPreferences(newAllergyType, newEatingHabitType, setRecommendedResult) {

    let headers = {
        'Content-Type': 'application/json'
    };

    if (isLogin()) {
        headers['Authorization'] = `Bearer ${window.sessionStorage.getItem('token')}`;
    }

    
    fetch(`${baseUrl}/api/foods/recommend`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            "allergen_list": newAllergyType,
            "preference_list": newEatingHabitType
        })
    })
        .then(res => {
            if (!res.ok) {
                return res.json().then(error => { throw new Error(error.detail) });
            }
            return res.json();
        })
        .then(data => {
            console.log(data.result.food_list)
            setRecommendedResult(data.result.food_list)
        })
}