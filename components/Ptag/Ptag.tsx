import cn from 'classnames';

import { PtagProps } from './Ptag.props';

import styles from './Ptag.module.css';

export const Ptag = ({ size = 'm', className, children, ...props }: PtagProps): JSX.Element => {
  return (
    <p className={cn(className, styles.p, styles[size])} {...props}>
      {children}
    </p>
  );
};
