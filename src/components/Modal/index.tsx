import { useModal } from "../../hooks/useModal";
import { Form } from "../Form";
import styles from "./styles.module.css";
import CloseIcon from "../../assets/img/close.svg";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export function Modal() {
  const { close } = useModal();
  const ModalRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ModalRef);
  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <motion.div
      className={styles.modal}
      data-modal
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      ref={ModalRef}
    >
      <motion.div
        animate={{ opacity: 1, translateX: 0 }}
        initial={{ opacity: 0, translateX: "100%" }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, translateX: "100%" }}
        className={`${styles["modal-content"]}`}
      >
        <button onClick={close} className={styles.buttonClose}>
          <Image src={CloseIcon} width="32px" height="32px" alt="Close icon" />
        </button>
        <h1>Entrar em contato</h1>
        <Form />
      </motion.div>
    </motion.div>
  );
}
