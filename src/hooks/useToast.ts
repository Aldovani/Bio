import { useContext } from "react";
import { ToastContext } from "../contexts/ToastContext";

export function useToast() {
  const Toast = useContext(ToastContext);

  return Toast;
}
