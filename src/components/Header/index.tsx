import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img
        src="https://github.com/aldovani.png"
        alt="Aldovani Henrique da costa"
      />
      <div>
        <h1>Aldovani Henrique da costa</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio metus
          convallis eu tempus amet cras. Ultricies sed feugiat vitae viverra
          diam egestas ut amet sit. Odio rhoncus vestibulum tortor urna nec eu
          ullamcorper vestibulum.
        </p>
      </div>
    </header>
  );
}
