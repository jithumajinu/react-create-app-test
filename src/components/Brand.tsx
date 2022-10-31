import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Stack } from 'rsuite';

export interface BrandProps {}

export const Brand: FC<BrandProps> = props => {
  return (
    <Stack className="brand" {...props}>
      <Logo height={26} style={{ marginTop: 6 }} />
      <Link to="/">
        <span style={{ marginLeft: 14 }}>Gowru-UI</span>
      </Link>
    </Stack>
  );
};
export default Brand;
