import Link from "next/link";

const Layout = () => {
  return (
    <header>
      <img src="" alt="" />
      <h1>Bienvenue à la SCEP</h1>
      <ul>
        <li>
          <Link href={"/"}>Menu</Link>
        </li>
        <li>
          <Link href={"/AddMovie"}>
            Ajouter un film pour la saison en cours
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Layout;
