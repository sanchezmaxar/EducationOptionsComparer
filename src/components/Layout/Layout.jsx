import React from 'react';
import { CustomNavBar, Workspace } from '..';

const Layout = ({
  children,
}) => (
  <>
    <CustomNavBar />
    <Workspace>
      {children}
    </Workspace>
  </>
);

export default Layout;
