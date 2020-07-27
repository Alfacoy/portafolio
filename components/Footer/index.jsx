import style from "./style.module.scss";

const Footer = () => (
  <footer className={style.footer}>
    <ul>
      <li>
        <a
          href="https://twitter.com/tecknchips"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="icon/social_media/twitter.svg"
            alt="El perfil de Twitter de Brian"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/durand18/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="icon/social_media/linkedin.svg"
            alt="El perfil de Linkedin de Brian"
          />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/Alfacoy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="icon/social_media/github.svg"
            alt="El perfil de Github de Brian"
          />
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
