import style from "./style.module.scss";

const Footer = () => (
  <footer className={style.footer}>
    <a href="https://twitter.com/tecknchips" target="_blank">
      <img src="icon/twitter.svg" alt="Twitter" />
    </a>
    <a href="https://www.linkedin.com/in/durand18/" target="_blank">
      <img src="icon/linkedin.svg" alt="Linkedin" />
    </a>
    <a href="https://github.com/Alfacoy" target="_blank">
      <img src="icon/github.svg" alt="Github" />
    </a>
  </footer>
);

export default Footer;
