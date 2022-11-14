import styles from "../styles/Home.module.css";
import Film from "../components/Film";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <header>
        <img src="" alt="" />
        <h1>Salut</h1>
      </header>
      <Film data={data} />
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/movies");
  console.log(response);

  const data = await response.json();

  return { props: { data } };
}
