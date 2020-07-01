import React, { useEffect, useState } from "react";
/*____ Components ____*/
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Caroursel from "../components/Carousel";
import CarouselItem from "../components/CarouselIetm";
import Footer from "../components/Footer";
/*____ Hooks ____*/
import useInitialState from "../hooks/useInitialState";
/*____ Styles ____*/
import "../assets/styles/App.scss";

const API = "http://localhost:3000/initialState";

const App = () => {
  const initialState = useInitialState(API);

  return (
    <div>
      <Header />
      <Search />

      {initialState.mylist && initialState.mylist.length && (
        <Categories text="Mi lista">
          <Caroursel>
            {initialState.mylist &&
              initialState.mylist.map((item) => (
                <CarouselItem key={item.id} {...item} />
              ))}
          </Caroursel>
        </Categories>
      )}

      {initialState.trends && (
        <Categories text="Tendencias">
          <Caroursel>
            {initialState.trends &&
              initialState.trends.map((item) => (
                <CarouselItem key={item.id} {...item} />
              ))}
          </Caroursel>
        </Categories>
      )}

      {initialState.originals && (
        <Categories text="Originales de Platzi Video">
          <Caroursel>
            {initialState.originals &&
              initialState.originals.map((item) => (
                <CarouselItem key={item.id} {...item} />
              ))}
          </Caroursel>
        </Categories>
      )}

      <Footer />
    </div>
  );
};

export default App;
