import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";
import cn from "clsx";

const NotFound = () => {
  return (
    <section className={cn(styles.notFound, "container")}>
      <img
        src="/img/not-found.svg"
        alt="404"
        className={styles.notFound__image}
      />
      <div className={styles.notFound__content}>
        <p className={styles.notFound__desc}>
          Упс! Похоже, вы заблудились в этой неразберихе.
        </p>
        <Link className={styles.notFound__btn} to={"/"}>
          Вернуться на главную
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
