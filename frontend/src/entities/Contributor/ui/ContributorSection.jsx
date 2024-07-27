import styled from "styled-components"
import ContributorCell from "./ContributorCell"

function ContributorSection() {
    
    const contributors = [
        {
            name: '장민정',
            roles: ['PM', 'DESIGN'],
            email: 'rose050800@gmail.com'
        },
        {
            name: '이세은',
            roles: ['FRONT-END'],
            email: 'rose050800@gmail.com'
        },
        {
            name: '김건우',
            roles: ['FRONT-END'],
            email: 'rose050800@gmail.com'
        },
        {
            name: '김진하',
            roles: ['BACK-END'],
            email: 'rose050800@gmail.com'
        },
        {
            name: '김준하',
            roles: ['BACK-END'],
            email: 'rose050800@gmail.com'
        }
    ]

    return (
        <MainLayout>
            
            <Title>탄수 발자국 제작자</Title>

            {contributors.map((e)=>(
                <ContributorCell 
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