import Image from "next/image";
import Link from "next/link";
import logo from "../assets/images/logo.webp";
// import { IoMdAddCircle, IoMdFilm } from "react-icons/io";
import { IconContext } from "react-icons";

const Layout = () => {
  return (
    <header>
      <div className="bg-red-500 flex items-center justify-between">
        {/* <h1 className="font-orbitron">Bienvenue à la</h1> */}
        <Image src={logo} alt="logo de la S.C.E.P" className="w-20" />
        <IconContext.Provider
          value={{
            size: "3em",
            // color: "blue"
          }}
        >
          <Link href={"/Planning"}>
            {/* <IoMdFilm /> */}
            Films
          </Link>
          <Link href={"/AddMovie"}>
            {/* <IoMdAddCircle /> */}
            <span className="mr-2">Ajouter un film</span>
          </Link>
          <Link href={"/Admin"}>
            <span className="mr-2">Admin</span>
          </Link>
        </IconContext.Provider>
      </div>
    </header>
  );
};

export default Layout;
