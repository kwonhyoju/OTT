import React from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import DetailContainer from "./container/DetailContainer";
import SectionContainer from "./container/SectionContainer";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import BoxOfficeWrap from "./section/BoxOfficeWrap";

export default () => (
  <HashRouter>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={SectionContainer} />
        <Route path="/movie/:id" component={DetailContainer} />
        <Route exact path="/test/:date/:name" component={BoxOfficeWrap} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </>
  </HashRouter>
);