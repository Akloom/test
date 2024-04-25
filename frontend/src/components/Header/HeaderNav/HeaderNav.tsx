import { HeaderLink } from "../Links/Links";
import styles from "./HeaderNav.module.scss";
import cn from "clsx";

interface HeaderNavProps {
  menuActive: boolean;
}

const HeaderNav = ({ menuActive }: HeaderNavProps) => {
  return (
    <div
      className={cn(
        styles.header__collapse,
        menuActive ? styles.collapse__active : ""
      )}
    >
      <nav className={styles.nav}>
        <HeaderLink redirection="/">Бизнес</HeaderLink>
        <HeaderLink redirection="/about">О нас</HeaderLink>
        <HeaderLink redirection="/products">Цены</HeaderLink>
        <HeaderLink redirection="/contacts">Оформить заказ</HeaderLink>
      </nav>
    </div>
  );
};

export default HeaderNav;
