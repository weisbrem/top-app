import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import axios from 'axios';
import { ParsedUrlQuery } from 'querystring';

import { withLayout } from '../../layout/Layout';

import { firstLevelMenu } from '../../helpers/helpers';

import { MenuItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/page.interface';

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
}

const Type: NextPage<TypeProps> = ({ firstCategory }): JSX.Element => {
  return <>Type {firstCategory}</>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map(({ route }) => `/${route}`),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const firstCategoryItem = firstLevelMenu.find((menu) => menu.route === params.type);

  /**
   * if main route incorrect redirect 404
   *
   * ex: /123/big-data
   */
  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }

  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    {
      firstCategory: firstCategoryItem.id,
    }
  );

  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    },
  };
};

export default withLayout(Type);
