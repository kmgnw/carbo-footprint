import styled from "styled-components"

function StandardInput({placeholder, onChange, width,height,value}) {
    return (
        <InputWrap width={width} height={height}>

            <StyledInput
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                value={value}
            />

        </InputWrap>
    )
}

export default StandardInput

const InputWrap = styled.div`
width: ${({ width }) => width};
height: ${({ height }) => height};
padding: 1.4rem 1.6rem 1.4rem 1.8rem;
border-radius: 8px;
border: 1px solid #D9D9D9;
background-color: white
`

const StyledInput = styled.input`
border: none;
outline: none;
width:100%;
height: 100%;
color: #262829;
font-family: "Noto Sans KR";
font-size: 1.6rem;
font-style: normal;
font-weight: 500;
line-height: normal;
&::placeholder{
    color: #D9D9D9;
    font-family: "Noto Sans KR";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
`

