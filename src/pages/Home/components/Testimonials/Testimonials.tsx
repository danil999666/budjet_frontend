import { FC } from "react";

import styles from "./style.module.scss";
import cx from "clsx";

const Testimonials: FC = () => {
  return (
    <section
      className={cx(
        styles.testimonials,
        "dark:bg-slate-300 dark:text-slate-950",
      )}
    >
      <h2 className="dark:text-slate-950">Відгуки</h2>
      <div className={styles.testimonial}>
        <p className="dark:text-slate-950">
          "Ця компанія надала відмінний сервіс, і я не міг би бути більш
          задоволеним результатами!"
        </p>
        <h4 className="dark:text-slate-950">- Задоволений клієнт</h4>
      </div>
      <div className={styles.testimonial}>
        <p className="dark:text-slate-950">
          "Дуже рекомендую! Професійна команда та чудові результати."
        </p>
        <h4 className="dark:text-slate-950">- Щасливий клієнт</h4>
      </div>
    </section>
  );
};

export default Testimonials;
