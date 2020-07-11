import React, { Component } from "react";
import axios from "axios";
import Loading from "../Loading";

class BoxOfficeWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      propsCheck: true,
      data: null,
    };
  }

  //일별
  // "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.xml?key=c7681d4ec8dd225970ea706ab9c924da&targetDt=20200707"

  //url 주소 다름

  //주중
  // "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.xml?key=c7681d4ec8dd225970ea706ab9c924da&targetDt=20200701&weekGb=2";
  //주말
  // "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.xml?key=c7681d4ec8dd225970ea706ab9c924da&targetDt=20200701&weekGb=1"

  async MovieApi() {
    console.log(":::props::::", this.props.match.params);
    const { date, name } = this.props.match.params;
    if (name === "today") {
      try {
        const response = await axios.get(
          `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.REACT_APP_BOXOFFICE}&targetDt=${date}`
        );
        this.setState({
          name,
          data: response.data.boxOfficeResult,
          propsCheck: false,
        });
      } catch (e) {
        console.log(":::error:::", e);
      }
    } else {
      try {
        const response = await axios.get(
          `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=${
            process.env.REACT_APP_BOXOFFICE
          }&targetDt=${date}&weekGb=${name === "week" ? 2 : 1}`
        );
        this.setState({
          name,
          data: response.data.boxOfficeResult,
          propsCheck: false,
        });
      } catch (e) {
        console.log(":::error:::", e);
      }
    }
  }

  componentDidMount() {
    this.MovieApi();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { name } = nextProps.match.params;
    if (name !== prevState.name) {
      return {
        name: name,
        propsCheck: true,
      };
    } else {
      return {
        propsCheck: false,
      };
    }
  }

  componentDidUpdate() {
    if (this.state.propsCheck) {
      this.MovieApi();
    }
  }

  render() {
    console.log("render_propsCheck:::::::::", this.state.propsCheck);
    console.log("render_data::::::::", this.state.data);
    return this.state.propsCheck || !this.state.data ? (
      <Loading />
    ) : (
      <div style={{ color: "#fff" }}>
        <p>{this.state.data.boxofficeType}</p>
        <p>{this.state.data.showRange}</p>
      </div>
    );
  }
}

export default BoxOfficeWrap;
