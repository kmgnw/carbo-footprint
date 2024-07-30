import { baseUrl } from "../../../shared/config/baseurl";

export async function handleRegister(loginId, password, setError, navigate) {
    try {
        const response = await fetch(`${baseUrl}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                loginId: loginId,
                password: password,
            }),
        });

        if (response.ok) {
            navigate("/login");
            console.log(response);
        } else {
            const errorData = await response.json();
            if (response.status === 400) {
                setError(errorData.message || "회원가입에 실패했습니다.");
            } else {
                setError("오류가 발생했습니다.");
            }
        }
    } catch (error) {
        setError("네트워크 오류가 발생했습니다.");
    }
}