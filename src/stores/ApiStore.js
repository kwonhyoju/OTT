import { observable, action } from "mobx";
import axios from "axios";
class ApiStore {
  @observable data = {};

  @action
  getData() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`
      )
      .then(res => (this.data = res))
      .catch(error => console.log("error: " + error));
  }
}

export default ApiStore;
