import styled from "styled-components"

const GalleryTitleStyled = styled.h3`
    width: 100%;
`

const GalleryTitle = ({children}) => {
    return (
        <GalleryTitleStyled>{children}</GalleryTitleStyled>
    )
}

export default GalleryTitle