import styled from "styled-components"
import InputSearch from "../InputSearch"

const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    padding: 60px 24px;

    img {
        width: 212px;
        height: 64px;
    }
`

const Header = () => {
    return (
        <HeaderStyled>
            <img src="/logo.png"></img>
            <InputSearch></InputSearch>
        </HeaderStyled>
    )  
}

export default Header