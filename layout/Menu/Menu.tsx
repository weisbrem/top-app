import { useContext } from 'react';
import cn from 'classnames';

import { AppContext } from '../../context/app.contest';

import styles from './Menu.module.css';

export const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);

  return (
    <ul>
      {menu.map(({ _id }) => (
        <li key={_id.secondCategory}>{_id.secondCategory}</li>
      ))}
    </ul>
  );
};
