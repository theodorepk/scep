import styles from "../styles/Home.module.css";
import Film from "../components/Film";

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <img src="" alt="" />
        <h1>Salut</h1>
      </header>
      <Film />
    </div>
  );
}
