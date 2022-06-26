import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import axios from 'axios';

import { withLayout } from '../../layout/Layout';

import { MenuItem } from '../../interfaces/menu.interface';
import { PageModel } from '../../interfaces/page.interface';
import { ParsedUrlQuery } from 'querystring';
import { ProductModel } from '../../interfaces/product.interface';

const firstCategory = 0;

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
  page: PageModel;
  products: ProductModel[];
}

const Course: NextPage<CourseProps> = ({ products }: CourseProps): JSX.Element => {
  return <>{products && products.length}</>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory,
  });

  return {
    paths: menu.flatMap(({ pages }) => pages.map(({ alias }) => '/courses/' + alias)),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory,
  });
  const { data: page } = await axios.get<PageModel>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias,
  );
  const { data: products } = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find/', {
    category: page.category,
    limit: 10,
  });

  return {
    props: {
      menu,
      firstCategory,
      page,
      products,
    },
  };
};

export default withLayout(Course);
