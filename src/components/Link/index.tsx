import styles from "./styles.module.css";
import NextLink, { LinkProps } from "next/link";
import { useModal } from "../../hooks/useModal";

interface ILinksProps extends LinkProps {
  icon: string;
  text: string;
  isButton?: boolean;
}

export function Link({ icon, href = "", isButton = false, text }: ILinksProps) {
  const { open } = useModal();

  if (isButton) {
    return (
      <button className={styles.link} onClick={open}>
        <img src={`./${icon}.svg`} alt="" />
        <p dangerouslySetInnerHTML={{ __html: text }} />
      </button>
    );
  }
  return (
    <NextLink href={href} target="_blank" passHref>
      <a target="_blank" className={styles.link}>
        <img src={`./${icon}.svg`} alt="" />
        <p dangerouslySetInnerHTML={{ __html: text }} />
      </a>
    </NextLink>
  );
}
