import { baseUrl } from "../../../shared/config/baseurl";

export async function handleLogin(loginId, password, setError, navigate, setUserInfo) {
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

        if (response.ok) {
            setUserInfo({
                userId: loginId,
                flag: 1
            });
            console.log(response);
            navigate("/");
        } 
        else {
            const errorData = await response.json();
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
