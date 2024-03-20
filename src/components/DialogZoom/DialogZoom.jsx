import styled from "styled-components"
import FigureCard from "../PhotoGallery/FigureCard"

const OverlayStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.7);
    display: flex;
    align-items: center;
`

const DialiogZoomStyled = styled.dialog`
    margin: auto;
    padding: 0px;
    border: none;
    border-radius: 30px;
`
const DialogZoom = ({photo, changeLiked, closeDialogZoom}) => {
    return photo && (
        <OverlayStyled>
            <DialiogZoomStyled open={!!photo}>
                <FigureCard id={photo.id} path={photo.path} title={photo.title} source={photo.source} liked={photo.liked} inZoom likeClick={changeLiked} closeZoom={closeDialogZoom}></FigureCard>
            </DialiogZoomStyled>
        </OverlayStyled>
    )
}

export default DialogZoom