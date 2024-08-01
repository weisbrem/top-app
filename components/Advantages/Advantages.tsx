import CheckIcon from './check.svg';

import { IAdvantagesProps } from './Advantages.props';

import styles from './Advantages.module.css';
import { Htag } from '../Htag/Htag';
import { Ptag } from '../Ptag/Ptag';

export const Advantages = ({ advantages }: IAdvantagesProps): JSX.Element => {
  return (
    <>
      {advantages.map((a) => (
        <div key={a._id} className={styles.advantage}>
          <CheckIcon />
          <Htag tag='h3' className={styles.title}>
            {a.title}
          </Htag>
          <hr className={styles.vline} />
          <Ptag>{a.description}</Ptag>
        </div>
      ))}
    </>
  );
};
