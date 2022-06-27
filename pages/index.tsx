import type { GetStaticProps, NextPage } from 'next';
import { useState } from 'react';
import axios from 'axios';

import { Button, Htag, Ptag, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';

import { MenuItem } from '../interfaces/menu.interface';

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

const Home: NextPage<HomeProps> = ({ menu }: HomeProps): JSX.Element => {
  const [r, setR] = useState<number>(4);

  return (
    <>
      <Htag tag='h1'>text</Htag>
      <Button appearance='primary'>button</Button>
      <Button appearance='ghost' arrow='right'>
        button
      </Button>
      <Ptag size='s'>text s</Ptag>
      <Ptag>text m</Ptag>
      <Ptag size='l'>text l</Ptag>
      <Tag size='s'>Tag</Tag>
      <Tag color='red'>Tag red</Tag>
      <Tag color='green'>Tag green</Tag>
      <Tag size='s' color='primary'>
        Tag primary
      </Tag>
      <Tag color='gray'>Tag gray</Tag>
      <Rating rating={r} isEditable setRating={setR} />
    </>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory,
  });

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

export default withLayout(Home);
