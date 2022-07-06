import styles from "./styles.module.css";
import NextLink, { LinkProps } from "next/link";

interface ILinksProps extends LinkProps {
  icon: string;
  name: string;
  text: string;
  isButton?: boolean;
}

export function Link({
  icon,
  href="",
  name,
  isButton = false,
  text,
}: ILinksProps) {
  if (isButton) {
    return (
      <button
        className={styles.link}
        onClick={() => {
          alert("apertou");
        }}
      >
        <img src={`./${icon}.svg`} alt="" />
        <p>
          {text} <span>{name}</span>
        </p>
      </button>
    );
  }
  return (
    <NextLink href={href} target="_blank" passHref>
      <a target="_blank" className={styles.link}>
        <img src={`./${icon}.svg`} alt="" />
        <p>
          {text} <span>{name}</span>
        </p>
      </a>
    </NextLink>
  );
}
