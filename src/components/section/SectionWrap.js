import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Poster from "../Poster";
// import currentimg from "../../img/우리집.png";

const mainRoll = (popData, genreData, centerMode) => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    lazyLode: "ondemand",
    centerMode: centerMode,
    rows: 1,
    autoplaySpeed: 5000,
  };
  return (
    <ul>
      <Slider {...settings}>
        {popData.map((pop, index) => {
          const bgImage = pop.backdrop_path
            ? `https://image.tmdb.org/t/p/w780/${pop.backdrop_path}`
            : `https://image.tmdb.org/t/p/w780/${pop.poster_path}`;
          return (
            <li key={index}>
              <img src={bgImage} alt="" />
              <p>
                <span className="main-roll-title">{pop.title}</span>
                <span className="pop-genre">
                  {genreData.map((genre) => {
                    let genreName = "";
                    if (genre.id === pop.genre_ids[0]) genreName = genre.name;
                    return genreName;
                  })}
                </span>
                <br />
                <span className="pop-subtitle">{pop.overview}</span>
                <br />
                <Link to={`/movie/${pop.id}`}>
                  <span className="main-roll-playbtn">More view</span>
                </Link>
                <span className="main-roll-addbtn">Add to favourites</span>
              </p>
            </li>
          );
        })}
      </Slider>
    </ul>
  );
};

class SectionWrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      centerMode: null,
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
    const mainWidth = document.getElementsByClassName("App")[0].clientWidth;
    mainWidth <= 480
      ? this.setState({ centerMode: false })
      : this.setState({ centerMode: true });
  }
  render() {
    const { genreData, nowData, popData, upcomeData } = this.props;
    const { centerMode } = this.state;
    return (
      <section className="section-wrap">
        <div className="section-main_roll">
          {mainRoll(popData, genreData, centerMode)}
        </div>
        {/* main-roll */}
        <div className="section-current-movies">
          <p>현재상영작</p>
          <Poster data={nowData} genreData={genreData} diffWidth={false} />
        </div>
        {/* 현재 상영작 */}
        <div className="section-schedule-movies">
          <p>개봉예정작</p>
          <Poster data={upcomeData} genreData={genreData} diffWidth={true} />
        </div>
        {/* 개봉 예정작 */}
      </section>
    );
  }
}

export default SectionWrap;
