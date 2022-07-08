import styles from "./styles.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import { useModal } from "../../hooks/useModal";
import { useToast } from "../../hooks/useToast";

interface IFromData {
  email: string;
  subject: string;
  message: string;
}

const schema = yup
  .object({
    email: yup.string().required("Campo obrigatório").email("Email invalido"),
    subject: yup.string().required("Campo obrigatório"),
    message: yup.string().required("Campo obrigatório"),
  })
  .required();

export function Form() {
  const { close } = useModal();
  const { open } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<IFromData>({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const submitEmail: SubmitHandler<IFromData> = async (data) => {
    try {
      await api.post("send-email", data);
      close();
      open({ message: "Email enviado com sucesso", state: "success" });
    } catch (e) {
      console.log(e);
      open({ message: "Error ao enviar o email", state: "error" });
    }
  };

  return (
    <form onSubmit={handleSubmit(submitEmail)} className={styles.form}>
      <label htmlFor="email">
        <input
          type="email"
          id="email"
          placeholder="Email"
          {...register("email")}
          className={`${styles.field} ${errors.email ? styles.invalid : ""}`}
        />
        <span>{errors["email"] ? errors.email.message : ""}</span>
      </label>

      <label htmlFor="subject">
        <input
          id="subject"
          type="text"
          placeholder="Assunto"
          {...register("subject")}
          className={`${styles.field} ${errors.subject ? styles.invalid : ""}`}
        />
        <span>{errors["subject"] ? errors.subject.message : ""}</span>
      </label>

      <label htmlFor="mensagem">
        <textarea
          id="mensagem"
          placeholder="Mensagem"
          {...register("message")}
          className={`${styles.field} ${errors.message ? styles.invalid : ""}`}
        ></textarea>
        <span>{errors["message"] ? errors.message.message : ""}</span>
      </label>

      <button
        type="submit"
        disabled={!isValid}
        className={isSubmitting ? styles.loader : ""}
      >
        {isSubmitting ? "Enviando" : "Enviar"}
      </button>
    </form>
  );
}
