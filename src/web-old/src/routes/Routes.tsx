import React, { Fragment, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// configs
import { PATH_NAME, USER_ROLE } from 'configs';

// types
import { IRoutes } from 'models/IRoutes';

// layouts
import MainLayout from 'layouts/MainLayout';

// containers
import AuthGuard from 'guards/AuthGuard';
import GuestGuard from 'guards/GuestGuard';

// route
import RoleRoute from './RoleRoute';

// modules
const Error404View = lazy(() => import('features/Error404View'));
const DenyView = lazy(() => import('features/DenyView'));
const Users = lazy(() => import('features/Users'));
const Dashboard = lazy(() => import('features/Dashboard'));
const Configurations = lazy(() => import('features/Configurations'));
const Login = lazy(() => import('features/Login'));

const routesConfig: IRoutes[] = [
  {
    exact: true,
    path: '/',
    component: () => <Redirect to={PATH_NAME.DASHBOARD} />,
  },
  {
    exact: true,
    path: PATH_NAME.ERROR_404,
    component: Error404View,
  },
  {
    exact: true,
    guard: GuestGuard,
    path: PATH_NAME.LOGIN,
    component: Login,
  },
  {
    exact: true,
    path: PATH_NAME.ERROR_403,
    component: DenyView,
  },
  {
    path: '/',
    guard: AuthGuard,
    layout: MainLayout,
    routes: [
      {
        exact: true,
        path: PATH_NAME.DASHBOARD,
        component: Dashboard,
        requireRoles: [USER_ROLE.ADMIN, USER_ROLE.USER],
      },
      {
        exact: true,
        path: PATH_NAME.CONFIGURATIONS,
        component: Configurations,
        requireRoles: [USER_ROLE.ADMIN, USER_ROLE.USER],
      },
      {
        exact: true,
        path: PATH_NAME.USERS,
        component: Users,
        requireRoles: [USER_ROLE.ADMIN, USER_ROLE.USER],
      },
      {
        component: () => <Redirect to={PATH_NAME.ERROR_404} />,
      },
    ],
  },
  {
    path: '*',
    routes: [
      {
        exact: true,
        path: '/app',
        component: MainLayout,
      },
      {
        component: () => <Redirect to={PATH_NAME.ERROR_404} />,
      },
    ],
  },
];

const renderRoutes = (routes: IRoutes[]) => (
  <>
    {routes ? (
      <Suspense fallback={<div />}>
        <Switch>
          {routes.map((route: IRoutes, idx: number) => {
            const Guard = route.guard || Fragment;
            const Layout = route.layout || Fragment;
            const Component = route.component;
            const requireRoles = route.requireRoles || [];

            return (
              <Route
                key={`routes-${idx}`}
                path={route.path}
                exact={route.exact}
                render={(props: any) => (
                  <Guard>
                    <Layout>
                      {route.routes ? (
                        renderRoutes(route.routes)
                      ) : (
                        <RoleRoute requireRoles={requireRoles}>
                          <Component {...props} />
                        </RoleRoute>
                      )}
                    </Layout>
                  </Guard>
                )}
              />
            );
          })}
        </Switch>
      </Suspense>
    ) : null}
  </>
);

function Routes() {
  return renderRoutes(routesConfig);
}

export default Routes;
