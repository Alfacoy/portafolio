import style from "./style.module.scss";

const Intro = () => (
  <>
    <h1 className={style.header__title}>
      Brian Durand <span>Frontend Dev</span>
    </h1>

    <div className={style.header__box}>
      <div className={style.header__content}>
        <p>
          Soy <b>Frontend Developer</b> hace +3 años y vivo en Buenos Aires
          (Argentina). Actualmente me encuentro estudiando{" "}
          <b>Análisis en Sistemas</b> en el Instituto Beltran.
        </p>

        <p>
          Si buscas conocer más sobre mi, descarga el{" "}
          <a href="files/cv.pdf" target="_blank">
            <span>curriculum</span>
          </a>{" "}
          o visita mi perfil de{" "}
          <a
            href="https://www.linkedin.com/in/durand18/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Linkedin</span>
          </a>
          .
        </p>
        <div className={style.header__buttons}>
          <a
            href="files/cv.pdf"
            target="_blank"
            className="btn"
            rel="noopener noreferrer"
          >
            Curriculum
          </a>

          <a href="#guides" className="btn">
            Ver Más
          </a>
        </div>
      </div>
      <div className={style.header__image}>
        <img src="images/test.png" alt="Imagen de test" />
      </div>
    </div>
  </>
);

export default Intro;
