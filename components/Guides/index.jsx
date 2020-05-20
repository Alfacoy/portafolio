import style from "./style.module.scss";
import Card from "../Card";

const Guides = () => (
  <section className={style.Guide}>
    <h3>Ultimas Guias</h3>
    <div className={style.Grid}>
      <Card
        item={style.Grid_1}
        title={"Sanity"}
        href={"https://www.notion.so/Sanity-84b4f7f719eb485c9ea87ddf8f497872"}
        link={false}
      />

      <Card
        item={style.Grid_2}
        title={"Flexbox"}
        href={"https://www.notion.so/Sanity-84b4f7f719eb485c9ea87ddf8f497872"}
        link={false}
      />

      <Card
        item={style.Grid_3}
        title={"Grid"}
        href={"https://www.notion.so/Sanity-84b4f7f719eb485c9ea87ddf8f497872"}
        link={false}
      />

      <Card
        item={style.Grid_4}
        title={"Ver Más"}
        href={"/[_path]"}
        link={true}
        path={"/lista de guias"}
      />
    </div>
  </section>
);

export default Guides;
