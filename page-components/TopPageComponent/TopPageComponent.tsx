import React from 'react';
import { ITopPageComponentProps } from './TopPageComponent.props';
import { HhData, Htag, Tag } from '../../components';

import styles from './TopPageComponent.module.css';
import { TopLevelCategory } from '../../interfaces/page.interface';

export function TopPageComponent({ page, products, firstCategory }: ITopPageComponentProps): JSX.Element {
  return (
    <main className={styles.container}>
      <header className={styles.title}>
        <Htag tag='h1'>{page.title}</Htag>
        {products && (
          <Tag color='gray' size='m'>
            {products.length}
          </Tag>
        )}

        <span>сортировка</span>
      </header>
      <div>{products && products.map((p) => <div key={p._id}>{p.title}</div>)}</div>

      <div className={styles.hhTitle}>
        <Htag tag='h2'>Вакансия — {page.category}</Htag>
        <Tag color='red' size='m'>
          hh.ru
        </Tag>
      </div>

      {firstCategory === TopLevelCategory.Courses && <HhData {...page.hh} />}
    </main>
  );
}
