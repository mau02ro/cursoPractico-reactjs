import React from "react";
import Logo from "../assets/static/logo-platzi-video-BW2.png";
import Icon from "../assets/static/user-icon.png";
import "../assets/components/Header.scss";
const Header = () => {
  return (
    <div className="header">
      <img className="header__img" src={Logo} alt="Platzi Video" />
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={Icon} alt="" />
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <a href="/">Cuenta</a>
          </li>

          <li>
            <a href="/">Cerrar Sesión</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
