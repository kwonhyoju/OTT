import React from "react";

const BoxOfficeWrap = ({ boxOfficeData }) => {
  console.log("BoxOfficeWrap:::::", boxOfficeData);
  const test_array = boxOfficeData.dailyBoxOfficeList
    ? boxOfficeData.dailyBoxOfficeList
    : boxOfficeData.weeklyBoxOfficeList;
  return (
    <ul style={{ color: "white" }}>
      {test_array.map((item, index) => {
        return <li key={index}>{item.movieNm}</li>;
      })}
    </ul>
  );
};

export default BoxOfficeWrap;
