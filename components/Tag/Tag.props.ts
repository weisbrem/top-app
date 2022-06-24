import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 's' | 'm';
  color?: 'primary' | 'ghost' | 'red' | 'green' | 'gray';
  href?: string;
  children: ReactNode;
}
