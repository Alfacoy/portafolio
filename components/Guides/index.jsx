import style from "./style.module.scss";
import Card from "../Card";

const Guides = () => (
  <section id="guides" className={style.Guide}>
    <h3 className="title__section">Ultimas Guias</h3>
    <div className={style.Guide_Grid}>
      <Card
        item={style.Guide_Grid__1}
        title={"Sanity"}
        href={"https://www.notion.so/Sanity-84b4f7f719eb485c9ea87ddf8f497872"}
        link={false}
      />

      <Card
        item={style.Guide_Grid__2}
        title={"Flexbox"}
        href={"https://www.notion.so/Flexbox-ca880dc0215747a4a1b94cd55de3f68b"}
        link={false}
      />

      <Card
        item={style.Guide_Grid__3}
        title={"Grid"}
        href={"https://www.notion.so/Grid-88eb436451bb4277ac40a15893dcfc50"}
        link={false}
      />

      <Card
        item={style.Guide_Grid__4}
        title={"Ver Más"}
        href={"/[_path]"}
        link={true}
        path={"/lista de guias"}
      />
    </div>
  </section>
);

export default Guides;
