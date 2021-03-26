import React from 'react';
import { CustomFooter, CustomNavBar } from '..';

const Layout = ({
  children,
}) => (
  <>
    <CustomNavBar />
    {children}
    <CustomFooter />
  </>
);

export default Layout;
