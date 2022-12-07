import Image from "next/image";
import Link from "next/link";
import logo from "../assets/images/logo.webp";

//Import google Font
import { Orbitron } from "@next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

const Layout = () => {
  return (
    <header>
      <div className="bg-red-500 flex items-center">
        <h1 className={orbitron.className}>Bienvenue à la</h1>
        <Image src={logo} alt="logo de la S.C.E.P" className="w-20" />
      </div>

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
