import React, { Component } from "react";
import axios from "axios";

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            propsCheck: false,
            data: null,
        };
    }

    //일별
    // "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.xml?key=c7681d4ec8dd225970ea706ab9c924da&targetDt=20200707"

    //url 주소 다름

    //주중
    // "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.xml?key=c7681d4ec8dd225970ea706ab9c924da&targetDt=20200701&weekGb=2";
    //주말
    // "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.xml?key=c7681d4ec8dd225970ea706ab9c924da&targetDt=20200701&weekGb=1"

    async MovieApi() {
        console.log(":::props::::", this.props.match.params);
        const { date, name } = this.props.match.params;
        if (name === "today") {
            try {
                const response = await axios.get(
                    `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.xml?key=c7681d4ec8dd225970ea706ab9c924da&targetDt=${date}`
                );
                this.setState({
                    name,
                    data: response.data,
                });
            } catch (e) {
                console.log(":::error:::", e);
            }
        } else {
            try {
                const response = await axios.get(
                    `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.xml?key=c7681d4ec8dd225970ea706ab9c924da&targetDt=${date}&weekGb=${
                        name === "week" ? 2 : 1
                    }`
                );
                this.setState({
                    name,
                    data: response.data,
                });
            } catch (e) {
                console.log(":::error:::", e);
            }
        }
    }

    componentDidMount() {
        // console.log(":::CDM:::");
        this.MovieApi();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // console.log("::getprops::::", nextProps.match.params.name);
        // console.log("::getstate::::", prevState.name);
        const { name } = nextProps.match.params;
        if (name !== prevState.name) {
            return {
                name: name,
                propsCheck: true,
            };
        } else {
            return {
                propsCheck: false,
            };
        }
    }

    componentDidUpdate() {
        // console.log(":::cdu:::", this.state.propsCheck);
        if (this.state.propsCheck) {
            this.MovieApi();
        }
    }

    render() {
        return (
            <div style={{ color: "#fff" }}>
                {JSON.stringify(this.state.data)}
            </div>
        );
    }
}

export default Test;
