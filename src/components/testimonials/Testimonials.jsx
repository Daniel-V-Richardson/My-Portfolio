import React from "react";
import "./testimonials.css";
import AVATAR from "../../assets/avatar.png";

import {  Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/pagination";

const data = [
  {
    avatar: AVATAR,
    name: "Richard",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi delectus nobis quos id quaerat ipsam ab, illo ipsa earum a.",
  },
  {
    avatar: AVATAR,
    name: "Daniel",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi delectus nobis quos id quaerat ipsam ab, illo ipsa earum a.",
  },
  {
    avatar: AVATAR,
    name: "Robin",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi delectus nobis quos id quaerat ipsam ab, illo ipsa earum a.",
  },
  {
    avatar: AVATAR,
    name: "Darwin",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi delectus nobis quos id quaerat ipsam ab, illo ipsa earum a.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonial__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={avatar} alt="Avatar"></img>
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
