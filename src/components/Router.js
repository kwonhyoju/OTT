import React from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import DetailContainer from "./container/DetailContainer";
import SectionContainer from "./container/SectionContainer";
import DailyContainer from "./container/boxOffice/DailyContainer";
import WeekContainer from "./container/boxOffice/WeekContainer";
import WeekendContainer from "./container/boxOffice/WeekendContainer";

import Header from "./header/Header";
import Footer from "./footer/Footer";

export default () => (
  <HashRouter>
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={SectionContainer} />
        <Route path="/movie/:id" component={DetailContainer} />
        <Route path="/boxoffice/daily" component={DailyContainer} />
        <Route path="/boxoffice/week" component={WeekContainer} />
        <Route path="/boxoffice/weekend" component={WeekendContainer} />
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </>
  </HashRouter>
);
