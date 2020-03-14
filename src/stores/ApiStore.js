import { observable, action } from "mobx";

class ApiStore {
    @observable test = "aa";

    @action
    act() {
        console.log(111);
    }
}

export default ApiStore;
