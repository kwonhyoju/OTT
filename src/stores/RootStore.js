import ApiStore from "./ApiStore";
import BoxOfficeStore from "./BoxOfficeStore";

class RootStore {
  constructor() {
    this.apiStore = new ApiStore();
    this.boxOfficeStore = new BoxOfficeStore();
  }
}

export default RootStore;
