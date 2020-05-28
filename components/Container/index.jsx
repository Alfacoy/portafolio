import Head from "next/head";
import Guides from "../Guides";
import Proyects from "../Proyects";
import Footer from "../Footer";
import style from "./style.module.scss";

const Container = ({ children }) => (
  <main className={style.container}>
    <Head>
      <title>Tecknchips</title>
      <link rel="icon" type="image/png" href="icon/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <header className={style.container__child}>{children}</header>
    <Guides />
    <Proyects />
    <Footer />
  </main>
);

export default Container;
