import styled from "styled-components";

function EntryInfo({ name }) {
    return (
        <MainLayout>
            <EntryWrap>
                <EntryContainer>
                    <IconWrap>
                        <IconText>in</IconText>
                    </IconWrap>

                    <Text>{name}님이 들어오셨습니다.</Text>
                </EntryContainer>
            </EntryWrap>
        </MainLayout>
    )
}
export default EntryInfo;

const MainLayout = styled.div`
width: 100%;
padding: 1.2rem 2rem;
display: flex;
justify-content: center;
align-items: center;
`

const EntryWrap = styled.div`
border-radius: 20px;
background: #E3E5E7;
padding: 0.4rem 2rem
`

const Text = styled.div`
border-radius: 2rem;
background: #E3E5E7;
`

const EntryContainer = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
gap: 0.4rem
`

const IconWrap = styled.div`
border-radius: 2rem;
background: #BABEC0;
display:flex;
justify-content: center;
align-items: center;
padding: 0.2rem 0.4rem;
`

const IconText = styled.div`
color: #FFF;
text-align: center;
font-family: "Pretendard Variable";
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: normal;
`

