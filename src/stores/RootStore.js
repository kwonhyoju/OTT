import ApiStore from "./ApiStore";

class RootStore {
    constructor() {
        this.apiStore = new ApiStore();
    }
}

export default RootStore;
