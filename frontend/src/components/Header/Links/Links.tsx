import { ReactNode } from "react";
import styles from "./Links.module.scss";
import { Link, useLocation } from "react-router-dom";
import cn from "clsx";

interface HeaderLinkProps {
  redirection: string;
  children: ReactNode;
}

export const HeaderLink = ({ redirection, children }: HeaderLinkProps) => {
  const { pathname } = useLocation();
  const isActive = pathname === redirection;

  return (
    <Link
      className={cn(styles.nav__link, isActive ? `link__active` : "")}
      to={redirection}
    >
      {children}
    </Link>
  );
};
export const LogoLink = ({ redirection, children }: HeaderLinkProps) => {
  return (
    <Link className={styles.logo__link} to={redirection}>
      {children}
    </Link>
  );
};
