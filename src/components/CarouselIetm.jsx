import React from "react";
import PropTypes from "prop-types";
import IconOne from "../assets/static/play-icon.png";
import "../assets/components/CarouselItem.scss";

const CarouselIetm = ({ cover, title, year, contentRaiteng, duration }) => {
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <img
            className="carousel-item__details--img"
            src={IconOne}
            alt="Play Icon"
          />
          <img
            className="carousel-item__details--img"
            src={IconOne}
            alt="Plus Icon"
          />
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRaiteng} ${duration}`}
        </p>
      </div>
    </div>
  );
};

CarouselIetm.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  number: PropTypes.number,
  contentRaiteng: PropTypes.string,
  duration: PropTypes.number,
};

export default CarouselIetm;
