import { observable, action } from "mobx";
import axios from "axios";

class BoxOfficeStore {
  @observable isLoading = false;

  @observable boxOfficeData = null;

  @observable
  boxofficeApi = axios.create({
    baseURL: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice",
    params: {
      key: `${process.env.REACT_APP_BOXOFFICE}`,
      targetDt: this.yesterdayDate(),
    },
  });

  @action
  setLoading() {
    this.isLoading = false;
  }

  @action
  yesterdayDate() {
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate() - 1;
    let yesterday =
      year +
      `${month < 10 ? "0" + month : month}` +
      `${day < 10 ? "0" + day : day}`;
    return yesterday;
  }

  @action getDailyBoxOffice() {
    this.boxofficeApi
      .get("/searchDailyBoxOfficeList.json")
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
      .get("/searchWeeklyBoxOfficeList.json")
      .then((res) => {
        console.log("weekendBoxOffice", res.data.boxOfficeResult);
        this.boxOfficeData = res.data.boxOfficeResult;
        this.isLoading = true;
      })
      .catch((error) => console.log("getWeekendBoxOffice", error));
  }
}

export default BoxOfficeStore;
