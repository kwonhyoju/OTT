import React from "react";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import { inject, observer } from "mobx-react";

@inject('apiStore')
@observer
class Poster extends React.Component{
  // constructor(props){
  //   super(props);
  // }

  render(){
    const {data, genreData, diffWidth}= this.props;
    console.log("::A:::",this.props.apiStore.nowPlayHeight);

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

    if (diffWidth) {
      settings = {
        ...settings,
        slidesToShow: 3,
        // variableWidth: true,
        // centerMode: true,
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
            const test = {
              height:"100px"
            }
            return (
              <div className="hover-container" key={index} style={{height:"100px"}}>
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
                    <Link to={`/movie/${info.id}`}>
                    <div className="detail-view">
                      <button>more view</button>
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
};

export default Poster;
