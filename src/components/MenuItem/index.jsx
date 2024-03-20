import styled from "styled-components"

const MenuItemStyled = styled.li`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    margin-left: 10px;
    cursor: pointer;

    img {
        width: 24px;
        height: 24px;
        background: ${ props => props.$active ? "linear-gradient(90deg, #C98CF1 0%, #7B78E5 100%)" : "#04244F"};
        padding: 4px;
        border-radius: 8px;
    }
`

const MenuItem = ({icon, label, active}) => {
    return (
        <MenuItemStyled $active={active}>
            <img src={icon} alt="Ícone do menu" />
            <span>{label}</span>
        </MenuItemStyled>
    )
}

export default MenuItem