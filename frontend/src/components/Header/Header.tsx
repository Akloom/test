import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import styles from "./Header.module.scss";
import { LogoLink } from "./Links/Links";
import HeaderNav from "./HeaderNav/HeaderNav";
import cn from "clsx";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={styles.header}>
      <div className={cn(styles.header__content, "container")}>
        <LogoLink redirection="/">
          <img src="/img/logo-icon.svg" alt="" />
        </LogoLink>
        <HamburgerMenu show={toggleMenu} menuActive={menuActive} />
        <HeaderNav menuActive={menuActive} />
      </div>
    </header>
  );
};

export default Header;
