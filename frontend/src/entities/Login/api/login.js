import { baseUrl } from "../../../shared/config/baseurl";

export async function handleLogin(loginId, password, setError, navigate) {
    try {
        const response = await fetch(`${baseUrl}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                loginId: loginId,
                password: password,
            }),
        });

        const responseData = await response.json();

        if (response.ok) {
            sessionStorage.setItem("token", responseData.result.token);
            sessionStorage.setItem("userId", loginId);
            navigate("/");
        } else {
            if (response.status === 400) {
                setError("아이디 또는 비밀번호가 잘못되었습니다.");
            } else {
                setError("알 수 없는 오류가 발생했습니다.");
            }
        }
    } catch (error) {
        setError("네트워크 오류가 발생했습니다.");
    }
}
