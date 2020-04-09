import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import currentimg from "../../img/우리집.png";

@inject("apiStore")
@observer
class SectionWrap extends Component {
    // main_roll
    mainRoll = () => {
        const popluar = this.props.popData.data.results;
        const genreData = this.props.genreData.data.genres;
        return (
            <ul>
                {popluar.map((pop, index) => {
                    let style = {
                        backgroundImage: `url("https://image.tmdb.org/t/p/w1280/${pop.poster_path}")`,
                    };
                    return (
                        <li key={index} style={style}>
                            <p>
                                <span className="main-roll-title">
                                    {pop.title}
                                </span>
                                <span className="pop-genre">
                                    {genreData.map((genre) => {
                                        let genreName = "";

                                        if (genre.id === pop.genre_ids[0]) {
                                            genreName = genre.name;
                                        }

                                        return genreName;
                                    })}
                                </span>
                                <br />
                                <span className="pop-subtitle">
                                    {pop.overview}
                                </span>
                                <br />
                                <span className="main-roll-playbtn">
                                    More view
                                </span>
                                <span className="main-roll-addbtn">
                                    Add to favourites
                                </span>
                            </p>
                        </li>
                    );
                })}
            </ul>
        );
    };
    render() {
        const nowpaly = this.props.nowData.data.results;
        const genreData = this.props.genreData.data.genres;
        // 문제 1 왜 upcoming 데이터는 component에서 data.results하면  results 부터 인식을 못하는지
        // 문제 2 왜 upcoming 데이터는 map 함수만 넣으면 오류가 나는지!(render위아래 다 했는데 안돼!)

        return (
            <section className="section-wrap">
                <div className="section-main_roll">{this.mainRoll()}</div>
                <div className="section-current-movies">
                    <p>현재상영작</p>
                    <div className="section-current-roll">
                        {nowpaly.map((info, index) => {
                            return (
                                <div key={index}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`}
                                        alt=""
                                    />
                                    <div className="upcoming-box">
                                        <div>
                                            <p className="title">
                                                {info.title}
                                            </p>
                                            <p className="data-count">
                                                <span>{info.release_date}</span>{" "}
                                                / {info.vote_average}
                                            </p>
                                            <div>
                                                <p className="genre">
                                                    {genreData.map((genre) => {
                                                        let genreName = "";

                                                        if (
                                                            genre.id ===
                                                            info.genre_ids[0]
                                                        ) {
                                                            genreName =
                                                                genre.name;
                                                        }

                                                        return genreName;
                                                    })}
                                                </p>
                                                <p className="subTitle">
                                                    {info.overview}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="section-schedule-movies">
                    <p>개봉예정작</p>
                    <div className="section-schedule-roll">
                        <div>
                            <div className="schedule-text">text</div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SectionWrap;
