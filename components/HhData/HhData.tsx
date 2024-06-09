import { Card } from '../Card/Card';

import RateIcon from './rate.svg';

import { IHhDataProps } from './HhData.props';

import styles from './HhData.module.css';

export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: IHhDataProps): JSX.Element => {
  return (
    <div className={styles.hh}>
      <Card color='white' className={styles.count}>
        <p className={styles.title}>Всего вакансий</p>
        <span className={styles.countValue}>{count}</span>
      </Card>
      <Card color='white' className={styles.salary}>
        <div>
          <p className={styles.title}>Начальный</p>
          <span className={styles.salaryValue}>{juniorSalary}</span>
          <span className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon />
            <RateIcon />
          </span>
        </div>
        <div>
          <p className={styles.title}>Средний</p>
          <span className={styles.salaryValue}>{middleSalary}</span>
          <span className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
            <RateIcon />
          </span>
        </div>
        <div>
          <p className={styles.title}>Профессионал</p>
          <span className={styles.salaryValue}>{seniorSalary}</span>
          <span className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
          </span>
        </div>
      </Card>
    </div>
  );
};
