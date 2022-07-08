import { AppProps } from "next/app";
import "normalize.css/normalize.css";
import { ModalContextProvider } from "../contexts/ModalContext";
import { ToastContextProvider } from "../contexts/ToastContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToastContextProvider>
      <ModalContextProvider>
        <Component {...pageProps} />;
      </ModalContextProvider>
    </ToastContextProvider>
  );
}

export default MyApp;
