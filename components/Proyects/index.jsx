import Card from "../Card";
import style from "./style.module.scss";

const Proyects = () => {
  return (
    <section className={style.Proyects}>
      <h3 className="title__section">Proyectos</h3>
      <div className={style.Proyect_Grid}>
        <Card
          title={"Proyecto 1"}
          href={"/[_path]"}
          item={style.Proyect_Grid__1}
          link={true}
          path={"/lista de proyectos"}
        />
        <Card
          title={"Proyecto 2"}
          href={"/[_path]"}
          item={style.Proyect_Grid__2}
          link={true}
          path={"/lista de proyectos"}
        />
        <Card
          title={"Proyecto 3"}
          href={"/[_path]"}
          item={style.Proyect_Grid__3}
          link={true}
          path={"/lista de proyectos"}
        />
        <Card
          title={"Ver Más"}
          href={"/[_path]"}
          item={style.Proyect_Grid__4}
          link={true}
          path={"/lista de proyectos"}
        />
      </div>
    </section>
  );
};

export default Proyects;
