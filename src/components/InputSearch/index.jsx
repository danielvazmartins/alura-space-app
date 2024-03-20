import styled from "styled-components"
import { ReactSVG } from "react-svg"

import iconSearch from "../../assets/search.svg"

const InputStyled = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid var(--cor-rosa);
    border-radius: 10px;
    padding: 2px 10px;

    input {
        background: transparent;
        border: none;
        max-width: 500px;
        height: 32px;
        outline: none;
        padding: 4px;
    }

    .icon {
    }
`

const InputSearch = () => {
    return(
        <InputStyled>
            <input placeholder="O que você procura?"></input>
            <ReactSVG className="icon" src={iconSearch}></ReactSVG>
        </InputStyled>
    )
}

export default InputSearch