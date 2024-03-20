import styled from "styled-components"

const SectionFlexStyled = styled.section`
    display: flex;
    flex-direction: ${({$direction}) => $direction || "row"};
    align-items: ${({$align}) => $align || "normal"};
    gap: 10px;
`

const SectionFlex = ({direction, align, children}) => {
    return (
        <SectionFlexStyled $direction={direction} $align={align}>{children}</SectionFlexStyled>
    )
}

export default SectionFlex