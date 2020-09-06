import { useContext } from "react";
//Components
import CustomHead from "../CustomHead";
import Footer from "../Footer";
import ThemeContext from "../Theme";

//Style
import style from "./style.module.scss";

const Container = ({ children }) => {
  const themes = useContext(ThemeContext);
  return (
    <>
      <div>
        <CustomHead />
        <main className={style.container}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Container;
