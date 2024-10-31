'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';

const imgData = [
  {
    images: "/img3.jpg",
  },
  {
    images: "/img4.jpg",
  },
  {
    images: "/img5.jpg",
  },
  {
    images: "/img6.jpg",
  },
  {
    images: "/img4.jpg",
  },
  {
    images: "/img5.jpg",
  },
  {
    images: "/img6.jpg",
  },
  {
    images: "/img4.jpg",
  },
];

const ImageSlider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={16}
      slidesPerView={2}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        }
      }}
      className="max-w-[1300px] mx-auto"
    >
      {imgData.map((slide, index) => (
        <SwiperSlide key={index}>
          <Image
            src={slide.images}
            alt={`Slide ${index + 1}`}
            width={1156}
            height={521}
            priority={index === 0}
            className="w-full h-[300px] md:h-[600px] object-cover rounded-lg shadow-lg shadow-slate-1000"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;