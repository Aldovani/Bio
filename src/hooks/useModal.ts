import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";

export function useModal() {
  const modal = useContext(ModalContext);

  return modal;
}
