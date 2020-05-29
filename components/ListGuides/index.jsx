import Card from "../Card";
import DATA from "../../data/data_guides";
import style from "./style.module.scss";

const ListGuide = () => {
  const lista_css = DATA.guides
    .filter((item) => item.type == "css")
    .map((item) => {
      return (
        <li>
          <Card title={item.title} href={item.url} />
        </li>
      );
    });

  const lista_js = DATA.guides
    .filter((item) => item.type == "javascript")
    .map((item) => {
      return (
        <li>
          <Card title={item.title} href={item.url} />
        </li>
      );
    });

  const lista_api = DATA.guides
    .filter((item) => item.type == "api")
    .map((item) => {
      return (
        <li>
          <Card title={item.title} href={item.url} />
        </li>
      );
    });

  const lista_terminal = DATA.guides
    .filter((item) => item.type == "terminal")
    .map((item) => {
      return (
        <li>
          <Card title={item.title} href={item.url} />
        </li>
      );
    });

  return (
    <>
      <h3 className={style.title__guide}>CSS</h3>
      <ul>{lista_css}</ul>

      <h3 className={style.title__guide}>JAVASCRIPT</h3>
      <ul>{lista_js}</ul>

      <h3 className={style.title__guide}>API</h3>
      <ul>{lista_api}</ul>

      <h3 className={style.title__guide}>TERMINAL</h3>
      <ul>{lista_terminal}</ul>
    </>
  );
};

export default ListGuide;
