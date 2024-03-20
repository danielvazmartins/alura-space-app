import styled from "styled-components"

const BannerStyled = styled.div`
    display: flex;
    align-items: center;
    background: url("/images/banner.png") no-repeat center center;
    background-size: cover;
    height: 240px;
    border-radius: 20px;

    h1 {
        width: 240px;
        margin-left: 100px;
    }
`

const Banner = () => {
    return (
        <BannerStyled>
            <h1>A galeria mais completa de fotos do espaço!</h1>
        </BannerStyled>
    )
}

export default Banner