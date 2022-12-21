import React, {
  Fragment,
  FunctionComponent,
  PropsWithChildren,
} from "react";
import { NavMenu } from "../navigation/NavMenu";

type LayoutProps = PropsWithChildren<unknown>;

const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
  <Fragment>
    <NavMenu />
    {children}
  </Fragment>
);

export default Layout;
