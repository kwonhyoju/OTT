import { observable, action } from "mobx";
import axios from "axios";

class BoxOfficeStore {
  @observable
  boxofficeApi = axios.create({
    baseURL: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice",
    params: {
      key: `${process.env.REACT_APP_BOXOFFICE}`,
      targetDt: this.yesterdayDate(),
    },
  });

  @action
  yesterdayDate() {
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let yesterday =
      year +
      `${month < 10 ? "0" + month : month}` +
      `${day < 10 ? "0" + day : day}`;
    return yesterday;
  }

  @action getDailyBoxoffice() {
    this.boxofficeApi
      .get("/searchDailyBoxOfficeList.json")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log("getDailyBoxOffice: ", error));
  }

  @action getWeekendBoxOffice() {
    this.boxofficeApi
      .get("/searchWeeklyBoxOfficeList.json")
      .then((res) => console.log(res))
      .catch((error) => console.log("getWeekendBoxOffice", error));
  }

  @action getWeekBoxOffice() {
    this.boxofficeApi
      .get("/searchWeeklyBoxOfficeList.json", {
        params: {
          weekGb: "0",
        },
      })
      .then((res) => console.log(res))
      .catch((error) => console.log("getWeekBoxOffice", error));
  }
}

export default BoxOfficeStore;
