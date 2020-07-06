import React, { Component } from "react";
import Error from "../../Error";
import Loading from "../../Loading";
import BoxOfficeWrap from "../../section/BoxOfficeWrap";
import { inject, observer } from "mobx-react";

@inject("boxOfficeStore")
@observer
class DailyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }

  componentWillMount() {
    this.props.boxOfficeStore.setLoading();
  }

  componentDidMount() {
    try {
      this.props.boxOfficeStore.getWeekendBoxOffice();
    } catch (e) {
      this.setState = { error: true };
    }
  }

  render() {
    const { isLoading: loading, boxOfficeData } = this.props.boxOfficeStore;
    if (!this.state.error) {
      return (
        <>
          {loading ? (
            <BoxOfficeWrap boxOfficeData={boxOfficeData} />
          ) : (
            <Loading />
          )}
        </>
      );
    } else {
      return <Error />;
    }
  }
}

export default DailyContainer;
