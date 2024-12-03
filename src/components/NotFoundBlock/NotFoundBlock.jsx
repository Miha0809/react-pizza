import styles from "./NotFoundBlock.module.scss";

console.log(styles);

export const NotFloundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Нічого не знайдено
      </h1>
      <p className={styles.description}>
        На жаль, дана сторінка відсутня в нашому магазині
      </p>
    </div>
  );
};
