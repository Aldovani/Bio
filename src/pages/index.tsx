import { Header } from "../components/Header";
import { Link } from "../components/Link";
import styles from "../styles/Home.module.css";
import { Links } from "../utils/Links";

export default function Home() {
  return (
    <main className={styles.app}>
      <Header />

      <div className={styles.links}>
        {Links.map((link) => (
          <Link
            text={link.text}
            icon={link.icon}
            href={link.href}
            name={link.name}
            isButton={link.isButton}
          />
        ))}
      </div>
    </main>
  );
}
