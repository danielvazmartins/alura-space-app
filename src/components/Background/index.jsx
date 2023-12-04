import styled from 'styled-components'

const BackgroundStyled = styled.div`
    width: 100%;
    height: 100vh;
    background: var(--Gradiente-fundo, linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%));
`

const Background = ({children}) => {
    return (
        <BackgroundStyled>{children}</BackgroundStyled>
    )
}

export default Background