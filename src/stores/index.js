import ApiStore from "./ApiStore";
import BoxOfficeStore from "./BoxOfficeStore";

let apiStore = new ApiStore();
let boxOfficeStore = new BoxOfficeStore();

let stores = {
  apiStore,
  boxOfficeStore,
};

export default stores;
