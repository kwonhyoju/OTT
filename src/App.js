import React from "react";
import "./scss/index.scss";
import Header from "./components/header/Header";
import SectionWrap from "./components/section/SectionWrap";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <SectionWrap />
            <Footer />
        </div>
    );
}

export default App;
