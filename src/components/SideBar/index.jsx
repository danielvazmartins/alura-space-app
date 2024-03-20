import styled from "styled-components"
import MenuItem from "../MenuItem"

const SideBarStyled = styled.aside`
    width: 180px;

    ul {
        list-style: none;
    }
`

const SideBar = () => {
    const menuItems = [
        {
            icon: "/images/icon-house.png",
            label: "Início",
            active: true
        }, {
            icon: "/images/icon-eye.png",
            label: "Mais vistas"
        }, {
            icon: "/images/icon-liked.png",
            label: "Mais curtidas"
        }, {
            icon: "/images/icon-light.png",
            label: "Novas"
        }, {
            icon: "/images/icon-lamp.png",
            label: "Surpreenda-me"
        }
    ]
    return (
        <SideBarStyled>
            <nav>
                <ul>
                    {menuItems.map((item, index) => (
                        <MenuItem key={index} icon={item.icon} label={item.label} active={item.active}></MenuItem>
                    ))}
                </ul>
            </nav>
        </SideBarStyled>
    )
}

export default SideBar