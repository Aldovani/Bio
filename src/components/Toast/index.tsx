import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./styles.module.css";
import { useToast } from "../../hooks/useToast";
import emailError from "../../assets/img/email-error.svg";
import emailSuccess from "../../assets/img/email-success.svg";

export function Toast() {
  const { toast, isVisible } = useToast();
  const animate = isVisible ? { translateX: 0, opacity: 1 } : {};

  return (
    <motion.div
      initial={{ translateX: "-100%", opacity: 0 }}
      animate={animate}
      exit={{ translateX: "-100%", opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`${styles.toast} ${styles[toast.state]}`}
    >
      <Image
        src={toast.state === "success" ? emailSuccess : emailError}
        alt="Icon Email"
      />
      {toast.message}
    </motion.div>
  );
}
