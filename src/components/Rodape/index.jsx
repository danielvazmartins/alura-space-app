import styled from "styled-components"
import SectionFlex from "../SectionFlex"

const RodapeStyled = styled.section`
    background: #04244F;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    h3 {
        font-size: 16px;
    }
`

const Rodape = () => {
    return (
        <RodapeStyled>
            <SectionFlex>
                <img src="/images/footer/facebook.svg" alt="Ícone Facebook" />
                <img src="/images/footer/twitter.svg" alt="Ícone Twitter" />
                <img src="/images/footer/instagram.svg" alt="Ícone Instagram" />
            </SectionFlex>
            <h3>Developed by Daniel Vaz Villalobos Martins</h3>
        </RodapeStyled>
    )
}

export default Rodape