import React from "react";
import { Link } from "react-router-dom";
// import currentimg from "../../img/우리집.png";

const mainRoll = (popData, genreData) => {
  return (
    <ul>
      {popData.map((pop, index) => {
        let style = {
          backgroundImage: `url("https://image.tmdb.org/t/p/w1280/${pop.poster_path}")`,
        };
        return (
          <li key={index} style={style}>
            <p>
              <span className="main-roll-title">{pop.title}</span>
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
    </ul>
  );
};
const nowplay = (nowData, genreData) => {
  return (
    <div className="section-current-roll">
      {nowData.map((info, index) => {
        // let genreList = info.genre_ids.slice(0, 2);
        return (
          <div key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`}
              alt=""
            />
            <div className="upcoming-box">
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
                      // genreList.findIndex((element) => {
                      //   if (element === genre.id) {
                      //     genreName = genre.name;
                      //   }
                      // });

                      return genreName;
                    })}
                  </p>
                  <p className="subTitle">{info.overview}</p>
                </div>
                <Link to={`/movie/${info.id}`}>
                  <div className="datil-view">
                    <button>more view</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
const upcome = (upcomeData, genreData) => {
  // console.log("개봉예정::::", upcomes);
  return (
    <div className="section-schedule-roll">
      {upcomeData.map((info, index) => {
        //let genreList = info.genre_ids.slice(0, 2);

        // console.log("::::A:::",genreTest);
        let style = {
          backgroundImage: `url("https://image.tmdb.org/t/p/w1280/${info.poster_path}")`,
        };
        return (
          <div key={index} style={style}>
            <div className="schedule-text">
              <div>
                <p className="title">{info.title}</p>
                <p className="data-count">
                  <span>{info.release_date}</span> ⭐️{info.vote_average} / 10
                </p>
                <div className="text">
                  <p className="genre">
                    {genreData.map((genre) => {
                      let genreName = "";

                      if (genre.id === info.genre_ids[0])
                        genreName = genre.name;

                      // genre 2개 부르기
                      /*let genreName = [];

                      genreList.findIndex((element) => {
                        if (element === genre.id) {
                          genreName = genre.name;
                        }
                      });*/

                      return genreName;
                    })}
                  </p>
                  <p className="subTitle">{info.overview}</p>
                </div>
                <Link to={`/movie/${info.id}`}>
                  <div className="datil-view">
                    <button>more view</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const SectionWrap = ({ popData, nowData, upcomeData, genreData }) => {
  return (
    <section className="section-wrap">
      <div className="section-main_roll">{mainRoll(popData, genreData)}</div>
      {/* main-roll */}
      <div className="section-current-movies">
        <p>현재상영작</p>
        {nowplay(nowData, genreData)}
      </div>
      {/* 현재 상영작 */}
      <div className="section-schedule-movies">
        <p>개봉예정작</p>
        {upcome(upcomeData, genreData)}
      </div>
      {/* 개봉 예정작 */}
    </section>
  );
};

export default SectionWrap;
