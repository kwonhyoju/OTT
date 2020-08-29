import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import "./scss/index.scss";
import Router from "./components/Router";

@inject("apiStore")
@observer
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "",
    };
    // this.handleWindowResize = this.handleWindowResize.bind(this);
    // this.mainApp = React.createRef();
  }

  componentDidMount() {
    // window.addEventListener("resize", this.handleWindowResize);
    // this.handleWindowResize();
  }

  // handleWindowResize = () => {
  //     const mainWidth = this.mainApp.current.offsetWidth;

  //     if (mainWidth > 1200) {
  //         this.setState({
  //             active: "large",
  //         });
  //     } else if (mainWidth > 640) {
  //         this.setState({
  //             active: "medium",
  //         });
  //     } else {
  //         this.setState({
  //             active: "small",
  //         });
  //     }
  // };

  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;
