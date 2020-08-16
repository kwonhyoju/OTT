import React from "react";
import { inject, observer } from "mobx-react";
import SearchWrap from "../section/SearchWrap";
import Loading from "../Loading";
import Error from "../Error";

@inject("apiStore")
@observer
class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      propsCheck: true,
      keyword: "",
    };
  }

  getSearchData() {
    this.props.apiStore.setLoading();
    const {
      match: {
        params: { keyword },
      },
    } = this.props;
    try {
      this.props.apiStore.searchMovie(keyword);
    } catch (e) {
      this.setState({ error: true });
      console.log("error", e);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.keyword !== prevState.keyword) {
      return {
        propsCheck: true,
        keyword: nextProps.match.params.keyword,
      };
    } else {
      return {
        propsCheck: false,
      };
    }
  }

  componentDidMount() {
    this.getSearchData();
  }

  componentDidUpdate() {
    if (this.state.propsCheck) {
      this.getSearchData();
    }
  }

  render() {
    const loading = this.props.apiStore.loadingApi;
    const searchData = this.props.apiStore.searchData;
    return !this.state.error ? (
      loading.length === 1 ? (
        <SearchWrap searchData={searchData} />
      ) : (
        <Loading />
      )
    ) : (
      <Error />
    );
  }
}

export default SearchContainer;
