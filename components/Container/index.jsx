import CustomHead from "../CustomHead";
import Footer from "../Footer";
import style from "./style.module.scss";

const Container = ({ children }) => (
  <>
    <CustomHead />
    <main className={style.container}>{children}</main>
    <Footer />
  </>
);

export default Container;
