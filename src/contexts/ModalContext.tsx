import { createContext, ReactNode, useState } from "react";

interface IModalContextProviderProps {
  children: ReactNode;
}
interface IModalContextData {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const ModalContext = createContext({} as IModalContextData);

export function ModalContextProvider({ children }: IModalContextProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  return (
    <ModalContext.Provider value={{ isOpen, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}
