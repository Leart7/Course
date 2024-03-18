import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img src="./logo.png" alt="logo" className="w-32 hover:cursor-pointer" />
    </Link>
  );
}

export default Logo;
