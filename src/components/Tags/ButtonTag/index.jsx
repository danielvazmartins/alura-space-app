import styled from "styled-components"

const ButtonTagStyled = styled.button`
    padding: 10px;
    margin-right: 10px;
    border: none;
    border-radius: 10px;
    background: rgba(217, 217, 217, 0.30);
    cursor: pointer;
`

const ButtonTag = ({id, children}) => {
    return (
        <ButtonTagStyled id={id}>{children}</ButtonTagStyled>
    )
}

export default ButtonTag