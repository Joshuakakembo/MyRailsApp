import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "../app/shared/Spinner";

const Dashboard = lazy(() => import("./dashboard/Dashboard"));

// const Buttons = lazy(() => import('./basic-ui/Buttons'));
// const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
// const Typography = lazy(() => import('./basic-ui/Typography'));

const BasicElements = lazy(() => import("./form-elements/BasicElements"));

const BasicTable = lazy(() => import("./tables/BasicTable"));

// const Mdi = lazy(() => import('./icons/Mdi'));

// const ChartJs = lazy(() => import("./charts/ChartJs"));

// const Error404 = lazy(() => import('./error-pages/Error404'));
// const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import("./user-pages/Login"));
const Register1 = lazy(() => import("./user-pages/Register"));
const Lockscreen = lazy(() => import("./user-pages/Lockscreen"));

const Registrant = lazy(() => import("./domain_modify/modify.contacts.registrant"));
const Admin = lazy(() => import("./domain_modify/modify.contacts.admin"));
const Billing = lazy(() => import("./domain_modify/modify.contacts.billing"));
const Tech= lazy(() => import("./domain_modify/modify.contacts.tech"));
const NameServers = lazy(() => import("./domain_modify/modify.contacts.nameServers"));


const DomainPage = lazy(() => import("./domain_visibility/DomainPage"));
const DomainRegister = lazy(() => import("./register_domain/DomainRegister"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />

        {/* <Route path="/basic-ui/buttons" component={ Buttons } /> */}
        {/* <Route path="/basic-ui/dropdowns" component={ Dropdowns } />
          <Route path="/basic-ui/typography" component={ Typography } /> */}

        <Route path="/form-Elements/basic-elements" component={BasicElements} />

        <Route path="/tables/basic-table" component={BasicTable} />

        {/* <Route path="/icons/mdi" component={ Mdi } /> */}

        {/* <Route path="/charts/chart-js" component={ChartJs} /> */}

        <Route path="/user-pages/login-1" component={Login} />
        <Route path="/user-pages/register-1" component={Register1} />
        <Route path="/user-pages/lockscreen" component={Lockscreen} />

        <Route path="/modify_domain/registrant" component={Registrant} />
        <Route path="/modify_domain/admin" component={Admin} />
        <Route path="/modify_domain/billing" component={Billing} />
        <Route path="/modify_domain/tech" component={Tech} />
        <Route path="/modify_domain/name_servers" component={NameServers} />

        {/* <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } /> */}

        <Route path="/domain_visibility/DomainPage" component={DomainPage} />
        <Route
          path="/domain_register/DomainRegister"
          component={DomainRegister}
        />

        <Redirect to="/dashboard" />
      </Switch>
    </Suspense>
  );
}
