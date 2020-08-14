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
    };
  }

  componentWillMount() {
    this.props.apiStore.setLoading();
    try {
      this.props.apiStore.searchMovie(query);
    } catch (e) {
      this.setState({ error: true });
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
