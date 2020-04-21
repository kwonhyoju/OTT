import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import "./scss/index.scss";
import Header from "./components/header/Header";
// import SectionWrap from "./components/section/SectionWrap";
import SectionContainer from "./components/container/SectionContainer";
import Footer from "./components/footer/Footer";
// import Loading from "./components/Loading";

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
        this.handleWindowResize();
        window.addEventListener("resize", this.handleWindowResize);
    }

    handleWindowResize = () => {
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
    };

    render() {
        return (
            <div ref={this.mainApp} className={`App ${this.state.active}`}>
                <Header />
                <SectionContainer />
                <Footer />
            </div>
        );
    }
}

export default App;
