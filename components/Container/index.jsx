import Head from "next/head";
import Footer from "../Footer";
import style from "./style.module.scss";

const Container = ({ children }) => (
  <div className={style.container}>
    <Head>
      <title>Tecknchips</title>
    </Head>
    <main className={style.main}>{children}</main>
    <Footer />
  </div>
);

export default Container;
