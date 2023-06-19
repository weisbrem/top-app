import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import cn from 'classnames';

import { AppContext } from '../../context/app.contest';

import { firstLevelMenu } from '../../helpers/helpers';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';

import styles from './Menu.module.css';

export const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);
  const router = useRouter();

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((menuItem) => {
          if (menuItem._id.secondCategory === secondCategory) {
            menuItem.isOpened = !menuItem.isOpened;
          }

          return menuItem;
        })
      );
  };

  const buildFirstLevel = () => {
    return (
      <ul className={styles.firstLevelList}>
        {firstLevelMenu.map((firstMenu) => (
          <li key={firstMenu.route} className={styles.route}>
            <Link href={`/${firstMenu.route}`}>
              <p
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: firstMenu.id === firstCategory,
                })}
              >
                {firstMenu.icon}
                <span>{firstMenu.name}</span>
              </p>
            </Link>
            {firstMenu.id === firstCategory && buildSecondLevel(firstMenu)}
          </li>
        ))}
      </ul>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <ul className={styles.secondLevelList}>
        {menu.map(({ pages, _id: { secondCategory }, isOpened }) => {
          if (pages.map((page) => page.alias).includes(router.asPath.split('/')[2])) {
            isOpened = true;
          }

          return (
            <li key={secondCategory}>
              <p className={styles.secondLevel} onClick={() => openSecondLevel(secondCategory)}>
                {secondCategory}
              </p>
              <ul
                className={cn(styles.secondLevelBlock, {
                  [styles.secondLevelBlockOpened]: isOpened,
                })}
              >
                {buildThirdLevel(pages, menuItem.route)}
              </ul>
            </li>
          );
        })}
      </ul>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((page) => (
      <li
        key={page.alias}
        className={cn(styles.thirdLevel, {
          [styles.thirdLevelActive]: `/${route}/${page.alias}` === router.asPath,
        })}
      >
        <Link href={`/${route}/${page.alias}`}>{page.category}</Link>
      </li>
    ));
  };

  return <nav className={styles.menu}>{buildFirstLevel()}</nav>;
};
