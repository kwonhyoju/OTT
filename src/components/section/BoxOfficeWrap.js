import React, { Component } from "react";
import axios from "axios";
import Loading from "../Loading";
import moment from "moment";

class BoxOfficeWrap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            propsCheck: true,
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
        // console.log(":::props::::", this.props.match.params);
        const { date, name } = this.props.match.params;
        if (name === "today") {
            try {
                const response = await axios.get(
                    `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.REACT_APP_BOXOFFICE}&targetDt=${date}`
                );
                this.setState({
                    name,
                    data: response.data.boxOfficeResult,
                    propsCheck: false,
                });
            } catch (e) {
                console.log(":::error:::", e);
            }
        } else {
            try {
                const response = await axios.get(
                    `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=${
                        process.env.REACT_APP_BOXOFFICE
                    }&targetDt=${date}&weekGb=${name === "week" ? 2 : 1}`
                );
                this.setState({
                    name,
                    data: response.data.boxOfficeResult,
                    propsCheck: false,
                });
            } catch (e) {
                console.log(":::error:::", e);
            }
        }
    }

    componentDidMount() {
        this.MovieApi();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
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
        if (this.state.propsCheck) {
            this.MovieApi();
        }
    }

    rankView=(data)=>{
        return(
        <div className="rank-box">
            {data.boxofficeType === "일별 박스오피스"?
                data.dailyBoxOfficeList.map((info,index)=>{
                    return(
                    <div key={index}>
                        <div className="movie-text">
                            <p className="m-rank">{info.rnum}</p>
                            <p className="m-title"><span>{info.movieNm}</span><span>{info.openDt}</span></p>
                        </div>
                        <div className="movie-detail-btn">
                            {info.rankOldAndNew==="NEW"?<p>new</p>:""}
                            <div>
                                <i className="fas fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>);
            }):data.weeklyBoxOfficeList.map((info,index)=>{
                return(
                <div key={index}>
                    <div className="movie-text">
                            <p className="m-rank">{info.rnum}</p>
                            <p className="m-title"><span>{info.movieNm}</span><span>{info.openDt}</span></p>
                        </div>
                    <div className="movie-detail-btn">
                            {info.rankOldAndNew==="NEW"?<p>new</p>:""}
                            <div>
                                <i className="fas fa-chevron-right"></i>
                            </div>
                        </div>
                </div>);
        })}
        </div>
        );
    }

    render() {
        const weekOfMonth = (m) =>
            m.week() - moment(m).startOf("month").week() + 1;
        const nowDate = moment().utc(true);

        return this.state.propsCheck || !this.state.data ? (
            <Loading />
        ) : (
            <div className="boxOffice-wrap">
                <p className="boxOffice-title">
                    {this.state.data.boxofficeType === "일별 박스오피스"
                        ? moment().format(`YY / MM / DD`)
                        :moment().format(`MM`)+"월 "+ weekOfMonth(nowDate) + "주차"}
                </p>
                <div className="boxOffice-rank">
                    {this.rankView(this.state.data)}
                </div>
            </div>
        );
    }
}

export default BoxOfficeWrap;
