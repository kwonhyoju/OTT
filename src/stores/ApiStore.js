import { observable, action } from "mobx";
import axios from "axios";

class ApiStore {
  @observable loadingApi = [];

  @observable popData = {}; //main_roll
  @observable nowData = {}; //현재상영작
  @observable upcomeData = {}; //개봉예정작
  @observable genreData = {}; //장르

  @observable isLoading = false;
  @observable
  movieApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
      api_key: `${process.env.REACT_APP_KEY}`,
      language: "en-US",
    },
  });

  //isLoading false로 초기화하는 함수
  @action
  setLoading() {
    this.loadingApi = [];
  }

  //mainRoll
  @action
  popularData() {
    this.movieApi
      .get(`movie/popular`)
      .then((res) => {
        this.popData = res.data.results;
        this.loadingApi.push("popularData");
      })
      .catch((error) => console.log("error: " + error));
  }

  //현재상영작
  @action
  nowpalyData() {
    this.movieApi
      .get(`movie/now_playing`)
      .then((res) => {
        this.nowData = res.data.results;
        this.loadingApi.push("nowplayData");
      })
      .catch((error) => console.log("error: " + error));
  }

  //개봉예정작
  @action
  upcomingData() {
    this.movieApi
      .get(`movie/upcoming`)
      .then((res) => {
        this.upcomeData = res.data.results;
        this.loadingApi.push("upcomingData");
      })
      .catch((error) => console.log("error: " + error));
  }

  //장르
  @action
  getGenre() {
    this.movieApi
      .get("/genre/movie/list")
      .then((res) => {
        this.genreData = res.data.genres;
        this.loadingApi.push("genreData");
      })
      .catch((error) => {
        console.log("error: " + error);
      });
  }

  /*detail 페이지 정보 얻어오기*/
  @action
  getMovieDetail(id) {
    this.movieApi
      .get(`movie/${id}`, {
        params: {
          append_to_respones: "videos",
        },
      })
      .then((res) => {
        this.movieDetail = res.data;
        this.loadingApi.push("movieDetail");
      })
      .catch((error) => console.log("getMovieDetail: ", error));
  }
}

export default ApiStore;
