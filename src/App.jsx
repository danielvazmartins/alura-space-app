import styled from "styled-components"
import Background from "./components/Background"
import Banner from "./components/Banner"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Tags from "./components/Tags"
import PhotoGallery from "./components/PhotoGallery"
import PopularGallery from "./components/PopularGallery"
import SectionFlex from "./components/SectionFlex"
import Rodape from "./components/Rodape"

const AppStyled = styled.div`
	section.content {
		flex: 1;
		padding-right: 15px;
	}
`

function App() {  
  return (
    <AppStyled>
      	<Background>
          	<Header></Header>
			<SectionFlex>
				<SideBar></SideBar>
				<section className="content">
					<Banner></Banner>
					<Tags></Tags>
					<SectionFlex>
						<PhotoGallery></PhotoGallery>
						<PopularGallery></PopularGallery>
					</SectionFlex>
				</section>
			</SectionFlex>
			<Rodape></Rodape>
        </Background>
	</AppStyled>
  )
}

export default App
