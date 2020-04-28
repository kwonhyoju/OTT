import React from "react";
import Slider from "react-slick";

const Poster = ({ data, genreData, fixedWidth }) => {
  let settings = {
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: false,
    slidesToScroll: 5,
    slidesToShow: 5,
    lazyLode: "ondemand",
    rows: 1,
  };
  if (fixedWidth) {
    settings = {
      ...settings,
      variableWidth: true,
      centerMode: true,
    };
  } else {
    settings = {
      ...settings,
    };
  }
  return (
    <div className="section-roll">
      <Slider {...settings}>
        {data.map((info, index) => {
          return (
            <div className="hover-container" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`}
                alt=""
              />
              <div className="information-box">
                <div>
                  <p className="title">{info.title}</p>
                  <p className="data-count">
                    <span>{info.release_date}</span> ⭐️
                    {info.vote_average} / 10
                  </p>
                  <div className="text">
                    <p className="genre">
                      {genreData.map((genre) => {
                        let genreName = "";
                        if (genre.id === info.genre_ids[0])
                          genreName = genre.name;
                        return genreName;
                      })}
                    </p>
                    <p className="subTitle">{info.overview}</p>
                  </div>
                  <div className="detail-view">
                    <button>more view</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Poster;
