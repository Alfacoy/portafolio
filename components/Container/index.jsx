import CustomHead from "../CustomHead";
import Guides from "../Guides";
import Proyects from "../Proyects";
import Footer from "../Footer";
import style from "./style.module.scss";

const Container = ({ children }) => (
  <main className={style.container}>
    <CustomHead />
    <header className={style.container__child}>{children}</header>
    <Guides />
    <Proyects />
    <Footer />
  </main>
);

export default Container;
