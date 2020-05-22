import Head from "next/head";
import Guides from "../Guides";
import Proyects from "../Proyects";
import Footer from "../Footer";
import style from "./style.module.scss";

const Container = ({ children }) => (
  <main className={style.container}>
    <Head>
      <title>Tecknchips</title>
    </Head>
    <header className={style.header__main}>{children}</header>
    <div className={style.toto}>
      <Guides />
      <Proyects />
    </div>
    <Footer />
  </main>
);

export default Container;
