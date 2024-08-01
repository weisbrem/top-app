import { TopLevelCategory, PageModel } from '../../interfaces/page.interface';
import { ProductModel } from '../../interfaces/product.interface';

export interface ITopPageComponentProps {
  firstCategory: TopLevelCategory;
  page: PageModel;
  products: ProductModel[];
}
