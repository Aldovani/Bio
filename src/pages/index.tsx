import { Header } from "../components/Header";
import { Link } from "../components/Link";
import { Modal } from "../components/Modal";
import { useModal } from "../hooks/useModal";
import styles from "../styles/Home.module.css";
import { Links } from "../utils/Links";
import NextHeader from "next/head";
import { AnimatePresence } from "framer-motion";
import { Toast } from "../components/Toast";

export default function Home() {
  const { isOpen } = useModal();
  return (
    <main className={styles.app}>
      <NextHeader>
        <title>Aldovani Bio</title>
      </NextHeader>
      <Header />

      <nav className={styles.links}>
        {Links.map((link) => (
          <Link
            key={link.icon}
            text={link.text}
            icon={link.icon}
            href={link.href}
            isButton={link.isButton}
          />
        ))}
      </nav>
      <AnimatePresence>{isOpen && <Modal />}</AnimatePresence>
      <Toast/>
    </main>
  );
}
