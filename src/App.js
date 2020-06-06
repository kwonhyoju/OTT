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
    // const nowPlayHeight = document.getElementsByClassName("slick-track")[1].clientHeight;

    // const nowPlayWidth= $(".hover-container").css("width");


    // height가 처음 slick track의 height를 가져와서 hover-container에 집어넣다보니 처음 제일 큰 height를 유지함 
    //내가 원하는건 inline인 img의height중에서 가장 큰 값을 잡아서 그걸 상단에 적용 시키는것
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

    // this.props.apiStore.setNowPlayWidth(nowPlayWidth);
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
