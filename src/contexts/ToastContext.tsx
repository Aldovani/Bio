import { createContext, ReactNode, useEffect, useState } from "react";

interface IToastContextProviderProps {
  children: ReactNode;
}

interface IToast {
  message: string;
  state: "success" | "error";
}

interface IToastContextData {
  toast: IToast;
  isVisible: boolean;
  open: (props: IToast) => void;
}

export const ToastContext = createContext({} as IToastContextData);

export function ToastContextProvider({ children }: IToastContextProviderProps) {
  const [toast, setToast] = useState<IToast>({
    message: "Email enviado com sucesso",
    state: "success",
  });
  const [isVisible, setIsVisible] = useState(false);

  const open = ({ message, state }: IToast) => {
    setToast({ message, state });
    setIsVisible(true);
  };

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    }
  }, [isVisible]);

  return (
    <ToastContext.Provider value={{ isVisible, toast, open }}>
      {children}
    </ToastContext.Provider>
  );
}
