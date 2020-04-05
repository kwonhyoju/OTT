import { observable, action } from "mobx";
import axios from "axios";

class ApiStore {
  @observable data = {};
  @observable isLoading= false;

  @observable movieApi = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    params: {
      api_key:`${process.env.REACT_APP_KEY}`,
      language:"en-US"
    }
  });

  @action
  getData() {
      this.movieApi.get(
        `movie/upcoming`
      )
      .then(res => {
        this.data = res;
        this.isLoading= true;
        console.log("::RES:::",res);
      })
      .catch(error => console.log("error: " + error));
  }
}

export default ApiStore;
