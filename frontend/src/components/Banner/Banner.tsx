import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.banner__content}>
        <h1 className={styles.banner__title}>
          <span>Lorem ipsum</span>
          dolor sit amet consectetur <span>adipiscing</span>
        </h1>
        <div className={styles.banner__info}>
          <h4 className={styles.banner__text}>
            At vero eos et accusamus et iusto odio dignissimos ducimus!
          </h4>
          <ul className={styles.banner__list}>
            <li className={styles.banner__listItem}>
              - Totam rem aperiam eaque ipsa
            </li>
            <li className={styles.banner__listItem}>
              - Sit voluptatem accusantium doloremque laudantium
            </li>
            <li className={styles.banner__listItem}>
              - Sed ut perspiciatis, unde omnis iste natus error
            </li>
          </ul>
        </div>
        <div className={styles.banner__buttons}></div>
      </div>
    </section>
  );
};

export default Banner;
