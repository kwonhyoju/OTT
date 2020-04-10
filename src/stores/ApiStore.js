import { observable, action } from "mobx";
import axios from "axios";

class ApiStore {
    @observable popData = {}; //main_roll
    @observable nowData = {}; //현재상영작
    @observable upcomeData = {}; //개봉예정작

    @observable genreData = {};
    @observable isLoading = false;

    @observable movieApi = axios.create({
        baseURL: "https://api.themoviedb.org/3/",
        params: {
            api_key: `${process.env.REACT_APP_KEY}`,
            language: "en-US",
        },
    });

    @action
    popularData() {
        this.movieApi
            .get(`movie/popular`)
            .then((res) => {
                this.popData = res;
            })
            .catch((error) => console.log("error: " + error));
    }

    @action
    nowpalyData() {
        this.movieApi
            .get(`movie/now_playing`)
            .then((res) => {
                this.nowData = res;
            })
            .catch((error) => console.log("error: " + error));
    }

    @action
    upcomingData() {
        this.movieApi
            .get(`movie/upcoming`)
            .then((res) => {
                this.upcomeData = res;
                this.isLoading = true;
            })
            .catch((error) => console.log("error: " + error));
    }

    @action
    getGenre() {
        this.movieApi
            .get("/genre/movie/list")
            .then((res) => {
                this.genreData = res;
            })
            .catch((error) => {
                console.log("error: " + error);
            });
    }
}

export default ApiStore;
