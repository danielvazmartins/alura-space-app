import styled from "styled-components"
import tags from "./tags.json"
import ButtonTag from "./ButtonTag"

const TagsStyled = styled.div`
    margin: 20px 0;
    
    span {
        margin-right: 30px;
    };
`

const renderTags = () => {
    return tags.map(tag => (
        <ButtonTag key={tag.id}>{tag.title}</ButtonTag>
    ))
}

const Tags = () => {
    return (
        <TagsStyled>
            <span>Busque por tags:</span>
            {renderTags()}
        </TagsStyled>
    )
}

export default Tags