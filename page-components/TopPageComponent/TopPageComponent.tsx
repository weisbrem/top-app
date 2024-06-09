import React from 'react';
import { ITopPageComponentProps } from './TopPageComponent.props';

export function TopPageComponent({ page, products, firstCategory }: ITopPageComponentProps): JSX.Element {
  return <>{products && products.length}</>;
}
