import { useContext } from 'react';
import cn from 'classnames';

import { AppContext } from '../../context/app.contest';

import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/page.interface';

import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import styles from './Menu.module.css';

const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
  { route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
  { route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
  { route: 'products', name: 'Товары', icon: <ProductsIcon />, id: TopLevelCategory.Products },
];

export const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <ul className={styles.firstLevelList}>
        {firstLevelMenu.map((firstMenu) => (
          <li key={firstMenu.route} className={styles.route}>
            <a href={`/${firstMenu.route}`}>
              <p
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: firstMenu.id === firstCategory,
                })}>
                {firstMenu.icon}
                <span>{firstMenu.name}</span>
              </p>
            </a>
            {firstMenu.id === firstCategory && buildSecondLevel(firstMenu)}
          </li>
        ))}
      </ul>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <ul className={styles.secondLevelList}>
        {menu.map((secondMenu) => (
          <li key={secondMenu._id.secondCategory}>
            <p className={styles.secondLevel}>{secondMenu._id.secondCategory}</p>
            <ul
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: secondMenu.isOpened,
              })}>
              {buildThirdLevel(secondMenu.pages, menuItem.route)}
            </ul>
          </li>
        ))}
      </ul>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((page) => (
      <li
        key={page.alias}
        className={cn(styles.thirdLevel, {
          [styles.thirdLevelActive]: false,
        })}>
        <a href={`/${route}/${page.alias}`}>{page.category}</a>
      </li>
    ));
  };

  return <nav className={styles.menu}>{buildFirstLevel()}</nav>;
};
