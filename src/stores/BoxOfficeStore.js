import { observable, action } from "mobx";
import axios from "axios";

class BoxOfficeStore {
  @observable isLoading = false;

  @observable boxOfficeData = {};

  @observable
  boxofficeApi = axios.create({
    baseURL: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice",
    params: {
      key: `${process.env.REACT_APP_BOXOFFICE}`,
    },
  });

  @action
  setLoading() {
    this.isLoading = false;
  }

  @action
  yesterdayDate() {
    const date = new Date();
    return this.getFormattedDate(date);
  }

  @action
  lastWeekDate() {
    const today = new Date();
    const daysago = 6;
    const lastWeek = new Date(today - 3600000 * 24 * daysago);
    return this.getFormattedDate(lastWeek);
  }

  @action
  getFormattedDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate() - 1;
    let targetDt =
      year +
      `${month < 10 ? "0" + month : month}` +
      `${day < 10 ? "0" + day : day}`;
    return targetDt;
  }

  @action getDailyBoxOffice() {
    this.boxofficeApi
      .get("/searchDailyBoxOfficeList.json", {
        params: {
          targetDt: this.yesterdayDate(),
        },
      })
      .then((res) => {
        console.log("dailyBoxOffice", res.data.boxOfficeResult);
        this.boxOfficeData = res.data.boxOfficeResult;
        this.isLoading = true;
      })
      .catch((error) => console.log("getDailyBoxOffice: ", error));
  }

  @action getWeekBoxOffice() {
    this.boxofficeApi
      .get("/searchWeeklyBoxOfficeList.json", {
        params: {
          weekGb: "0",
          targetDt: this.lastWeekDate(),
        },
      })
      .then((res) => {
        console.log("weekBoxOffice", res.data.boxOfficeResult);
        this.boxOfficeData = res.data.boxOfficeResult;
        this.isLoading = true;
      })
      .catch((error) => console.log("getWeekBoxOffice", error));
  }

  @action getWeekendBoxOffice() {
    this.boxofficeApi
      .get("/searchWeeklyBoxOfficeList.json", {
        params: {
          targetDt: this.lastWeekDate(),
        },
      })
      .then((res) => {
        console.log("weekendBoxOffice", res.data.boxOfficeResult);
        this.boxOfficeData = res.data.boxOfficeResult;
        this.isLoading = true;
      })
      .catch((error) => console.log("getWeekendBoxOffice", error));
  }
}

export default BoxOfficeStore;
