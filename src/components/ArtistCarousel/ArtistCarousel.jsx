// src/components/ArtistCarousel/ArtistCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import { CarouselContainer, ArtistCard, ArtistImage, ArtistName, ArtistBio } from './ArtistCarousel.styles';
import artists from './artists';


export default function ArtistCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {artists.map((artist, index) => (
          <ArtistCard key={index}>
            <ArtistImage src={artist.img} alt={artist.name} />
            <ArtistName>{artist.name}</ArtistName>
            <ArtistBio>{artist.bio}</ArtistBio>
          </ArtistCard>
        ))}
      </Slider>
    </CarouselContainer>
  );
}
