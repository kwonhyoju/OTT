import React, { Component, Fragment } from "react";
import { inject, observer } from "mobx-react";
import SectionWrap from "../section/SectionWrap";
import Loading from "../Loading";

@inject("apiStore")
@observer
class SectionContainer extends Component {
    componentDidMount() {
        this.props.apiStore.upcomingData();
    }

    render() {
        const loading = this.props.apiStore.isLoading;
        return (
            <Fragment>
                {loading ? (
                    <SectionWrap viewData={this.props.apiStore.data} />
                ) : (
                    <Loading />
                )}
            </Fragment>
        );
    }
}

export default SectionContainer;
