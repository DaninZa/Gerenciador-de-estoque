import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div>
        <Link to={"/"}>REACT STOCK</Link>
      </div>

      <nav>
        <Link to={"/dashboard"}>Início</Link>
        <Link to={"/Products"}>Items</Link>
      </nav>
    </header>
  );
}
