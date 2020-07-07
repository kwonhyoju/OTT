import React from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import DetailContainer from "./container/DetailContainer";
import SectionContainer from "./container/SectionContainer";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import withBoxoffice from "../hoc/withBoxoffice";

export default () => (
    // const url =
    //     "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.xml?key=c7681d4ec8dd225970ea706ab&targetDt=20120101";
    <HashRouter>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={SectionContainer} />
                <Route path="/movie/:id" component={DetailContainer} />
                <Route path="/test" WrappedComponent={withBoxoffice} />
                <Redirect from="*" to="/" />
            </Switch>
            <Footer />
        </>
    </HashRouter>
);
