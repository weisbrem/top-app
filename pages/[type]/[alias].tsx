import axios from 'axios';
import { ParsedUrlQuery } from 'querystring';
import type { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';

import { withLayout } from '../../layout/Layout';

import { firstLevelMenu } from '../../helpers/helpers';

import { MenuItem } from '../../interfaces/menu.interface';
import { PageModel, TopLevelCategory } from '../../interfaces/page.interface';
import { ProductModel } from '../../interfaces/product.interface';

interface CourseProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  page: PageModel;
  products: ProductModel[];
}

const Course: NextPage<CourseProps> = ({ products }: CourseProps): JSX.Element => {
  return <>{products && products.length}</>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];

  for (const menuItem of firstLevelMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
      {
        firstCategory: menuItem.id,
      }
    );

    paths = paths.concat(
      menu.flatMap(({ pages }) => pages.map(({ alias }) => `/${menuItem.route}/${alias}`))
    );
  }

  return {
    paths,
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

  try {
    const { data: menu } = await axios.post<MenuItem[]>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
      {
        firstCategory: firstCategoryItem.id,
      }
    );

    const secondCategoryItem = menu
      .flatMap(({ pages }) => pages)
      .find(({ alias }) => alias === params.alias);

    /**
     * if manu length or second menu route incorrect redirect 404
     *
     * ex: /courses/123
     */
    if (menu.length === 0 || !secondCategoryItem) {
      return {
        notFound: true,
      };
    }

    const { data: page } = await axios.get<PageModel>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias
    );
    const { data: products } = await axios.post<ProductModel[]>(
      process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find/',
      {
        category: page.category,
        limit: 10,
      }
    );

    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default withLayout(Course);
