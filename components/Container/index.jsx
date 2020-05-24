import Head from "next/head";
import Guides from "../Guides";
import Proyects from "../Proyects";
import Footer from "../Footer";
import style from "./style.module.scss";

const Container = ({ children }) => (
  <main className={style.Container}>
    <Head>
      <title>Tecknchips</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <header className={style.Container__Child}>{children}</header>
    <Guides />
    <Proyects />
    <Footer />
  </main>
);

export default Container;
