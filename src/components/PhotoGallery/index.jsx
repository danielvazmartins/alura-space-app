import styled from "styled-components"
import GalleryTitle from "../GalleryTitle"
import photosMock from "./photos.json"
import FigureCard from "./FigureCard"
import DialogZoom from "../DialogZoom/DialogZoom"
import { useState } from "react"

const PhotoGalleryStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    padding-bottom: 25px;
`
const PhotoGallery = () => {
    const [photos, setPhotos] = useState(photosMock)
    const [photoSelected, setPhotoSelected] = useState(null)

    const renderCards = () => {
        return photos.map(photo => (
            <FigureCard key={photo.id} id={photo.id} title={photo.title} path={photo.path} source={photo.source} liked={photo.liked} likeClick={changeLiked} zoomClick={showDialogZoom}></FigureCard>
        ))
    }

    const getPhotoById = (id) => {
        return photos.find(photo => photo.id === id)
    }
    
    const showDialogZoom = (photoId) => {
        setPhotoSelected(getPhotoById(photoId))
    }   
    
    const changeLiked = (photoId) => {
        setPhotos(photos.map(photo => {
            if (photo.id === photoId) photo.liked = !photo.liked
            return photo
        }))
        if (photoSelected && photoSelected.id === photoId) {
            setPhotoSelected(getPhotoById(photoId))
        }
    }

    return (
        <PhotoGalleryStyled>
            <GalleryTitle>Navegue pela galeria</GalleryTitle>
            {renderCards()}
            <DialogZoom photo={photoSelected} changeLiked={changeLiked} closeDialogZoom={() => setPhotoSelected(null)}></DialogZoom>
        </PhotoGalleryStyled>
    )
}

export default PhotoGallery