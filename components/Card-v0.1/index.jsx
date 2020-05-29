import Link from "next/link";
import style from "./style.module.scss";

const Card = ({ title, href, item, link, path }) => {
  if (link) {
    return (
      <Link href={href} as={path}>
        <a className={`${style.card} ${item}`}>
          <p>{title}</p>
        </a>
      </Link>
    );
  } else {
    return (
      <a className={`${style.card} ${item}`} href={href} target="_blank">
        <p>{title}</p>
      </a>
    );
  }
};

export default Card;
