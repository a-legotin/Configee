import React, {
  Fragment,
  FunctionComponent,
  PropsWithChildren,
} from "react";
import NavMenu from "../navigation/navmenu.component";

type LayoutProps = PropsWithChildren<unknown>;

const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
  <Fragment>
    <NavMenu />
    {children}
  </Fragment>
);

export default Layout;
