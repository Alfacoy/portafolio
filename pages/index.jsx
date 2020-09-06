//Components
import ThemeContext, { themes } from "../components/Theme";
import Container from "../components/Container";
import Header from "../components/Header";
import Guides from "../components/Guides";
import Proyects from "../components/Proyects";

const Home = () => (
  <ThemeContext.Provider value={themes.light}>
    <Container>
      <Header />
      <Guides />
      <Proyects />
    </Container>
  </ThemeContext.Provider>
);

export default Home;
