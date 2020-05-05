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
    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.mainApp = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);
  }

  handleWindowResize = () => {
    const nowPlayHeight = document.getElementsByClassName("slick-track")[1].clientHeight;
    const mainWidth = this.mainApp.current.offsetWidth;

    if (mainWidth > 1200) {
      this.setState({
        active: "large",
      });
    } else if (mainWidth > 640) {
      this.setState({
        active: "medium",
      });
    } else {
      this.setState({
        active: "small",
      });
    }
    
    this.props.apiStore.setNowPlayHeight(nowPlayHeight);
  };

  render() {
    return (
      <div ref={this.mainApp} className={`App ${this.state.active}`}>
        <Router />
      </div>
    );
  }
}

export default App;
