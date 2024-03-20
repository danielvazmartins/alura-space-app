import styled from "styled-components"
import SectionFlex from "../../SectionFlex"

const FigureCardStyled = styled.figure`
    position: relative;
    background: #001634;
    border-radius: 20px;
    width: ${({$inZoom}) => ($inZoom? "70vw": "270px")};
    max-height: 80vh;
    max-width: 570px;
    overflow: hidden;

    img {
        width: 100%;
    }

    >.icon {
        width: 16px;
        height: 16px;
        position: absolute;
        top: 24px;
        right: 24px;
        cursor: pointer;
    }

    figcaption {
        display: flex;
        justify-content: space-between;
        padding: 10px;

        .icon {
            width: 16px;
            height: 16px;
            cursor: pointer;
        }
    }
`

const FigureCard = ({id, path, title, source, liked, inZoom, likeClick, zoomClick, closeZoom}) => {
    const iconLike = (liked)? "/images/icon-heart-active.png": "/images/icon-heart.png"
    return (
        <FigureCardStyled $inZoom={inZoom}>
            <img src={path} alt={title} />
            {inZoom && 
                <img className="icon" src="/images/icon-close.png" alt="Ícone de fechar" onClick={closeZoom}/>}
            <figcaption>
                <SectionFlex direction="column">
                    <h4>{title}</h4>
                    <span>Fonte: {source}</span>
                </SectionFlex>
                <SectionFlex align="flex-end">
                    <img className="icon" src={iconLike} onClick={() => likeClick(id)} alt="Ícone de favorito" />
                    {!inZoom &&
                        <img className="icon" src="/images/icon-expand.png" onClick={() => zoomClick(id)} alt="Ícone de Zoom" />}
                </SectionFlex>
            </figcaption>
        </FigureCardStyled>
    )
}

export default FigureCard