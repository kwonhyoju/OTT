import React, { Component } from "react";
import "./scss/index.scss";
import Header from "./components/header/Header";
import SectionWrap from "./components/section/SectionWrap";
import Footer from "./components/footer/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: ""
    };
    this.handleWindowResize = this.handleWindowResize.bind(this);
    this.mainApp = React.createRef();
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);
  }

  handleWindowResize = () => {
    // console.log("AA::::", this.mainApp.current.offsetWidth);
    const mainWidth = this.mainApp.current.offsetWidth;
    if (mainWidth > 1200) {
      this.setState({
        active: "large"
      });
    } else if (mainWidth > 900) {
      this.setState({
        active: "medium"
      });
    } else {
      this.setState({
        active: "small"
      });
    }
  };

  render() {
    console.log(this.state.containerWidth);
    return (
      <div ref={this.mainApp} className={`App ${this.state.active}`}>
        <Header />
        <SectionWrap />
        <Footer />
      </div>
    );
  }
}

export default App;
