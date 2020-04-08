import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import currentimg from "../../img/우리집.png";

@inject("apiStore")
@observer
class SectionWrap extends Component {
    test = () => {
        const popluar = this.props.popData.data.results;
        const genreData = this.props.genreData.data.genres;
        console.log(":::C:::", popluar);
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
        // console.log(":::AAAA:::", this.props.popData.data.results);
        const popular = this.props.popData.data.results;
        const upcoming = this.props.upcomeData.data.results;
        const genreData = this.props.genreData.data.genres;
        return (
            <section className="section-wrap">
                <div className="section-main_roll">{this.test()}</div>
                <div className="section-current-movies">
                    <p>현재상영작</p>
                    <div className="section-current-roll">
                        {upcoming.map((upcoming, index) => {
                            return (
                                <div key={index}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500/${upcoming.poster_path}`}
                                        alt=""
                                    />
                                    <div className="upcoming-box">
                                        <div>
                                            <p className="title">
                                                {upcoming.title}
                                            </p>
                                            <p className="data-count">
                                                <span>
                                                    {upcoming.release_date}
                                                </span>{" "}
                                                / {upcoming.vote_average}
                                            </p>
                                            <div>
                                                <p className="genre">
                                                    {genreData.map((genre) => {
                                                        let genreName = "";

                                                        if (
                                                            genre.id ===
                                                            upcoming
                                                                .genre_ids[0]
                                                        ) {
                                                            genreName =
                                                                genre.name;
                                                        }

                                                        return genreName;
                                                    })}
                                                </p>
                                                <p className="subTitle">
                                                    {upcoming.overview}
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
                        <div>
                            <div className="schedule-text">text</div>
                        </div>
                        <div>
                            <div className="schedule-text">text</div>
                        </div>
                        <div>
                            <div className="schedule-text">text</div>
                        </div>
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
