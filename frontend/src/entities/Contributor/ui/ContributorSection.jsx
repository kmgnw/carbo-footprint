import styled from "styled-components"
import ContributorCell from "./ContributorCell"
import mj from "../../../assets/mj.svg";
import se from "../../../assets/se.svg";
import gn from "../../../assets/gn.svg";
import jinh from "../../../assets/jinh.svg";
import junh from "../../../assets/junh.svg";

function ContributorSection() {
    
    const contributors = [
        {
            img: mj,
            name: '장민정',
            roles: ['PM', 'DESIGN'],
            email: 'rose050800@gmail.com'
        },
        {
            img: se,
            name: '이세은',
            roles: ['FRONT-END'],
            email: 'lesley023@naver.com'
        },
        {
            img: gn,
            name: '김건우',
            roles: ['FRONT-END'],
            email: 'ge00nu@naver.com'
        },
        {
            img: jinh,
            name: '김진하',
            roles: ['BACK-END'],
            email: 'kjh03124@naver.com'
        },
        {
            img: junh,
            name: '김준하',
            roles: ['BACK-END'],
            email: 'wooha34567@naver.com'
        }
    ]

    return (
        <MainLayout>

            <Title>탄수 발자국 제작자</Title>

            {contributors.map((e)=>(
                <ContributorCell 
                img={e.img}
                name={e.name}
                roles={e.roles}
                email={e.email}
                />
            ))}

        </MainLayout>
    )
}
export default ContributorSection

const MainLayout = styled.div`
padding: 2.4rem 2.1rem 4.8rem 2.1rem;
background-color: #F2F3F5
`

const Title = styled.div`
color: #000;
font-family: "Noto Sans KR";
font-size: 1.6rem;
font-style: normal;
font-weight: 700;
line-height: 150%;
`