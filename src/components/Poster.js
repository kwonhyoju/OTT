import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

class Poster extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screenWidth: null,
        };
        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    handleResize() {
        const mainWidth = document.getElementsByClassName("App")[0].offsetWidth;
        if (mainWidth > 1260) {
            this.setState({
                screenWidth: "large",
            });
        } else if (mainWidth > 600) {
            this.setState({
                screenWidth: "medium",
            });
        } else {
            this.setState({
                screenWidth: "small",
            });
        }
    }

    render() {
        const { data, genreData, diffWidth } = this.props;
        const { screenWidth } = this.state;

        let settings = {
            arrows: true,
            dots: false,
            infinite: true,
            autoplay: false,
            rows: 1,
        };

        // 화면 너비에 따라 슬라이드 개수 변환
        if (diffWidth) {
            let n = screenWidth === "small" ? 1 : 3;
            settings = {
                ...settings,
                slidesToShow: n,
                slidesToScroll: n,
            };
        } else {
            let n;
            // let centermode = false;
            if (screenWidth === "large") n = 5;
            else if (screenWidth === "medium") n = 3;
            else {
                n = 1;
                // centermode = true;
            }
            settings = {
                ...settings,
                slidesToScroll: n,
                slidesToShow: n,
                // centerMode: centermode,
            };
        }

        return (
            <div className="section-roll">
                <Slider {...settings}>
                    {data.map((info, index) => {
                        if (!info.adult) {
                            return (
                                <div className="hover-container" key={index}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w342/${info.poster_path}`}
                                        alt=""
                                    />
                                    <div className="information-box">
                                        <div>
                                            <p className="title">
                                                {info.title}
                                            </p>
                                            <p className="data-count">
                                                <span>{info.release_date}</span>{" "}
                                                ⭐️
                                                {info.vote_average} / 10
                                            </p>
                                            <div className="text">
                                                <p className="genre">
                                                    {genreData.map((genre) => {
                                                        let genreName = "";
                                                        if (
                                                            info.genre_ids
                                                                .length &&
                                                            genre.id ===
                                                                info
                                                                    .genre_ids[0]
                                                        )
                                                            genreName =
                                                                genre.name;
                                                        return genreName;
                                                    })}
                                                </p>
                                                <p className="subTitle">
                                                    {info.overview}
                                                </p>
                                            </div>
                                            <Link to={`/movie/${info.id}`}>
                                                <div className="detail-view">
                                                    <button>more view</button>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </Slider>
            </div>
        );
    }
}

export default Poster;
