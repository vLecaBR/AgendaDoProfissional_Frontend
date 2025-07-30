// src/components/ArtistCarousel/ArtistCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import { CarouselContainer, ArtistCard, ArtistImage, ArtistName, ArtistBio } from './ArtistCarousel.styles';

const artists = [
  {
    name: 'Drako',
    img: '/artists/drako.jpg',
    bio: 'Old school com personalidade marcante.',
  },
  {
    name: 'Luna',
    img: '/artists/luna.jpg',
    bio: 'Traços delicados e sombreados perfeitos.',
  },
  {
    name: 'Rafa Ink',
    img: '/artists/rafa.jpg',
    bio: 'Especialista em blackwork e geométricos.',
  },
];

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
