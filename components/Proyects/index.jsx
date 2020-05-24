import Card from "../Card";
import style from "./style.module.scss";

const Proyects = () => {
  return (
    <section className={style.Proyects}>
      <h3>Proyectos</h3>
      <div className={style.Grid}>
        <Card
          title={"Proyecto 1"}
          href={"/[_path]"}
          item={style.item__1}
          link={true}
          path={"/lista de proyectos"}
        />
        <Card
          title={"Proyecto 2"}
          href={"/[_path]"}
          item={style.item__2}
          link={true}
          path={"/lista de proyectos"}
        />
        <Card
          title={"Proyecto 3"}
          href={"/[_path]"}
          item={style.item__3}
          link={true}
          path={"/lista de proyectos"}
        />
        <Card
          title={"Ver Más"}
          href={"/[_path]"}
          item={style.item__4}
          link={true}
          path={"/lista de proyectos"}
        />
      </div>
    </section>
  );
};

export default Proyects;
