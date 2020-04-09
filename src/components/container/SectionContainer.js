import React, { Component, Fragment } from "react";
import { inject, observer } from "mobx-react";
import SectionWrap from "../section/SectionWrap";
import Loading from "../Loading";

@inject("apiStore")
@observer
class SectionContainer extends Component {
    componentDidMount() {
        this.props.apiStore.popularData();
        this.props.apiStore.nowpalyData();
        this.props.apiStore.upcomingData();
        this.props.apiStore.getGenre();
    }

    render() {
        const loading = this.props.apiStore.isLoading;
        return (
            <Fragment>
                {loading ? (
                    <SectionWrap
                        popData={this.props.apiStore.popData}
                        nowData={this.props.apiStore.nowData}
                        upcomeData={this.props.apiStore.upcomeData}
                        genreData={this.props.apiStore.genreData}
                    />
                ) : (
                    <Loading />
                )}
            </Fragment>
        );
    }
}

export default SectionContainer;
