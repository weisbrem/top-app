import cn from 'classnames';
import { format } from 'date-fns';

import { FooterProps } from './Footer.props';

import styles from './Footer.module.css';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <>
      <footer className={cn(className, styles.footer)} {...props}>
        <p>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</p>
        <ul className={styles.list}>
          <li>
            <a href='#' target='_blank'>
              Пользовательское соглашение
            </a>
          </li>
          <li>
            <a href='#' target='_blank'>
              Политика конфиденциальности
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};
