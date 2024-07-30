import styled from "styled-components";
import logo from '../../../assets/main_logo.svg'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Header(){

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        sessionStorage.clear();
        setIsLoggedIn(false);
        navigate('/'); 
    };

    return(
        <MainLayout>
            {/* 레이아웃 용 hidden 컴포넌트 */}
            <StyledLogin style={{
                visibility: 'hidden'
            }}>로그인</StyledLogin>

            <StyledLogo src={logo}/>

            {isLoggedIn ? (
                <>
                    <StyledLogin onClick={handleLogout}>
                        로그아웃
                    </StyledLogin>
                </>
            ) : (
                <StyledLogin onClick={() => navigate('/login')}>
                    로그인
                </StyledLogin>
            )}
        </MainLayout>
    )
}
export default Header;


const MainLayout = styled.div`
width:100%;
height: 6rem;
display: flex;
justify-content: space-between;
align-items: center;
padding:0 20px 0 20px
`

const StyledLogo = styled.img`
`

const StyledLogin = styled.div`
color: var(--Primary-color1, #EF6038);
text-align: right;
font-family: "Noto Sans KR";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
cursor: pointer;
`