import React from 'react';
import { ITopPageComponentProps } from './TopPageComponent.props';
import { Advantages, HhData, Htag, Tag } from '../../components';

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

      {firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}

      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag='h2'>Преимущества</Htag>
          <Advantages advantages={page.advantages} />
        </>
      )}
      {page.seoText && <div className={styles.seoText} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
      <Htag tag='h2'>Получаемые навыки</Htag>
      {page.tags.map((t) => (
        <Tag key={t} color='primary'>
          {t}
        </Tag>
      ))}
    </main>
  );
}
