import logo from "../../images/star-wars-logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

function Header( {popUpLogin, popUpSignUp}) {

  return (
    <div>
      <div className="main-header">
        <div className="rrss">
          <p>Redes Sociales</p>
        </div>
        <div className="logo-container">
          <Link to="/">
            <img className="logo" src={logo} alt="" />
          </Link>
        </div>
        <div>
          <ul className="nav-login">
            <li onClick={popUpLogin}>
              LOG IN
            </li>
            <li>
              //
            </li>
            <li onClick={popUpSignUp} >
              SIGN UP
            </li>
          </ul>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/starships">STARSHIPS</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
