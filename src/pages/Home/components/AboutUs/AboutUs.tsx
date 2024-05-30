import { FC } from "react";
import Chart from "../../../../components/Chart/Chart.tsx";

const AboutUs: FC = () => {
  return (
    <section className="about-us dark:bg-slate-300 dark:text-slate-950">
      <h2 className="dark:text-slate-950">Про нас</h2>
      <div className="about-us-content ">
        <p text-red-500>
          Ми провідна компанія в нашій галузі, яка прагне надавати високоякісні
          послуги та продукти своїм клієнтам. Наша команда професіоналів прагне
          забезпечити задоволення клієнтів і досконалість у всьому, що ми
          робимо.
        </p>
        <Chart totalIncome={1000} totalExpense={500} />
      </div>
    </section>
  );
};

export default AboutUs;
