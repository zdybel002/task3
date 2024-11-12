import React from "react";
class Header extends React.Component {
  render() {
    return (
      <>
        <a href="/">Назад</a>
        <ul>
          <li>
            <a href="/cat/notebook">Ноутбуки</a>
          </li>
          <li>
            <a href="/cat/monitor">Мониторы</a>
          </li>
          <li>
            <a href="/cat/cellphone">Мобильные телефоны</a>
          </li>
        </ul>
      </>
    );
  }
}

export default Header;
