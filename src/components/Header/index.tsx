/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img
        src="https://github.com/aldovani.png"
        alt="Aldovani Henrique da costa"
      />
      <div>
        <span>Olá, eu sou</span>
        <h1> Aldovani Henrique da costa</h1>
        <p>
          e sou um desenvolvedor web de 18 anos. Meus interesses incluem anime,
          jogos, mangá, e uma variedade de outras coisas relacionadas à
          tecnologia. Eu realmente gosto de aprender coisas novas -
          especialmente quando elas são tão divertidas quanto codificar!e tenho
          estudado análise e desenvolvimento de sistemas na FATEC em
          Taquaritinga.
        </p>
      </div>
    </header>
  );
}
