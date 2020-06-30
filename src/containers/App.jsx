import React from "react";
/*____ Components ____*/
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Caroursel from "../components/Carousel";
import CarouselItem from "../components/CarouselIetm";
import "../assets/styles/App.scss";

const App = () => {
  return (
    <div>
      <Header />
      <Search />
      <Categories>
        <Caroursel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Caroursel>
      </Categories>
    </div>
  );
};

export default App;
