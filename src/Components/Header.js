import React from "react";
class Header extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <a href="/">Главная</a>
        </li>
        <li>
          <a href="/about">О сайте</a>
        </li>
        <li>
          <a href="/cat">Категории</a>
        </li>
      </ul>
    );
  }
}

export default Header;
