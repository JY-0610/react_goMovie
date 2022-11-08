import React from 'react';
import Banner from "../../component/Banner";
import Row from "../../component/Row";
import requests from '../../api/requests';

export default function MainPage() {
  return (
    <div>
      {" "}
      <Banner />
    <Row title="오직 넷플릭스에서만" id="NO"
    fetchUrl={requests.fetchNetflixOriginals}
    isLargeRow
    />
     <Row title="지금 뜨고 있는" id="TN"
    fetchUrl={requests.fetchTrending}
    
    />
     <Row title="인기있는 영화" id="TR"
    fetchUrl={requests.fetchTopRated}
   
    />
     <Row title="액션영화" id="AM"
    fetchUrl={requests.fetchActionMovies}
   
    />
     <Row title="코미디영화" id="CM"
    fetchUrl={requests.fetchcomedyMovies}
   
    />
   </div>
  )
}
