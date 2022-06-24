import cn from 'classnames';

import { ParagraphProps } from './Paragraph.props';

import styles from './Paragraph.module.css';

export const Paragraph = ({ size = 'm', className, children, ...props }: ParagraphProps): JSX.Element => {
  return (
    <p className={cn(className, styles.p, styles[size])} {...props}>
      {children}
    </p>
  );
};
