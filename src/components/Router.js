import React from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import DetailContainer from "./container/DetailContainer";
import SectionContainer from "./container/SectionContainer";
import BoxOfficeContainer from "./container/BoxOffceContainer";

import Header from "./header/Header";
import Footer from "./footer/Footer";

export default () => (
  <HashRouter>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={SectionContainer} />
        <Route path="/movie/:id" component={DetailContainer} />
        <Route path="/boxoffice/daily" component={BoxOfficeContainer} />
        <Route path="/boxoffice/week" component={BoxOfficeContainer} />
        <Route path="/boxoffice/weekend" component={BoxOfficeContainer} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </>
  </HashRouter>
);
