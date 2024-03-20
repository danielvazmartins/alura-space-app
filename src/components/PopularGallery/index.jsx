import styled from "styled-components"
import GalleryTitle from "../GalleryTitle"
import photos from "./photos.json"

const PopularGalleryStyled = styled.div`
    width: 180px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    img {
        border-radius: 20px;
    }

    @media (min-width: 1024px) {
        width: 210px;
    }
`

const renderPhotos = () => {
    return photos.map(photo => (<img key={photo.id} src={photo.path}></img>))
}

const PopularGallery = () => {
    return (
        <PopularGalleryStyled>
            <GalleryTitle>Populares</GalleryTitle>
            {renderPhotos()}
        </PopularGalleryStyled>
    )
}

export default PopularGallery