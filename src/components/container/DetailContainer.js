import React, { Component } from "react";
import Error from "../Error";
import Loading from "../Loading";
import DetailWrap from "../section/DetailWrap";
import { inject, observer } from "mobx-react";

@inject("apiStore")
@observer
class DetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }

  componentWillMount() {
    this.props.apiStore.setLoading();
  }
  
  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    try {
      this.props.apiStore.getMovieDetail(id);
    } catch (e) {
      this.setState = { error: true };
    }
  }

  render() {
    const { loadingApi: loading, movieDetail } = this.props.apiStore;
    //상세페이지 데이터
    console.log("movieDetail::::", movieDetail);
    console.log("detailLoading::::", loading);
    if (!this.state.error) {
      return (
        <>
          {loading.length === 1 ? <DetailWrap movieDetail={movieDetail} /> : <Loading />}
        </>
      );
    } else {
      return <Error />;
    }
  }
}

export default DetailContainer;
