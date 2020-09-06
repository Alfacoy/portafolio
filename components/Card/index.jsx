//Next
import Link from "next/link";

//Style
import style from "./style.module.scss";

const Card = ({ title, href, path, custom }) => {
  const str = href || "";

  if (str.slice(0, 1) == "/") {
    if (str.slice(0, 2) == "/[") {
      return (
        <Link href={href} as={path}>
          <a className={`${style.card} ${custom}`}>
            <p>{title}</p>
          </a>
        </Link>
      );
    } else {
      return (
        <Link href={href}>
          <a className={`${style.card} ${custom}`}>
            <p>{title}</p>
          </a>
        </Link>
      );
    }
  } else {
    return (
      <a
        className={`${style.card} ${custom}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>{title}</p>
      </a>
    );
  }
};

export default Card;
