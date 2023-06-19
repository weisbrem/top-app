import cn from 'classnames';

import { Menu } from '../Menu/Menu';

import { SidebarProps } from './Sidebar.props';

import Logo from '../logo.svg';

import styles from './Sidebar.module.css';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <>
      <div className={cn(styles.sidebar, className)} {...props}>
        <Logo className={styles.logo} />
        <div>Поиск</div>
        <Menu />
      </div>
    </>
  );
};
