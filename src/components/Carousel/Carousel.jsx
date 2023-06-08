import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import CardProduct1 from "../../assets/img/card-product1.svg"
import { CardProduct } from '../CardProduct/CardProduct';


const PrevButton = styled.button`
  border: none;
  padding: 20px 20px;
  font-size: 20px;
  cursor: pointer;
  float: left;
  z-index:1000;
  left:5px;
  top:-10px;
`;

const NextButton = styled.button`
  border: none;
  padding: 20px 20px;
  font-size: 20px;
  cursor: pointer;
  float: right;
  z-index:1000;
  right:20px;
  top:-10px;
`;

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <PrevButton className={className} onClick={onClick}>
          </PrevButton>
    );
  };

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <NextButton className={className} onClick={onClick}>
      
      </NextButton>
    );
  };
const CarouselWrapper =styled.div`
  .slick-arrow{
    position: absolute !important;
    top:40% !important;
    background-color:transparent !important;
    /* transform:translateY(-50%) !important; */
  }
  .slick-prev:before, .slick-next:before{
    
    color:#000;
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;
    opacity: .5;
    
    -webkit-font-smoothing: antialiased;
  }
 .slick-slider {
       width:100%;
       height:500px;
        display:flex;
        gap:2%;
        position:relative;
        .slick-slide{
          width:308px !important;
          margin-right:20px;
        }
   
    .slick-list {
      margin: 0 0px; /* Điều chỉnh margin của danh sách slide để không bị tràn khỏi carousel */
    }
  }
  
`
  return (
    <CarouselWrapper>
      <h2>Multiple items</h2>
      <Slider  className='slick-slider' {...settings} prevArrow={<PrevArrow className={"btn-carousel"} />} nextArrow={<NextArrow  className={"btn-carousel"} />}>
        
        <CardProduct tag={"Hot"}  img={CardProduct1} title={"Adicolor Classics Joggers"} type={"Dress"} cost={19.99}/>
       
        <CardProduct tag={"Sale"}  img={CardProduct1} title={"Adicolor Classics Joggers"} type={"Dress"} cost={19.99}/>
      
        <CardProduct  img={CardProduct1} title={"Adicolor Classics Joggers"} type={"Dress"} cost={19.99}/>
      
        <CardProduct img={CardProduct1} title={"Adicolor Classics Joggers"} type={"Dress"} cost={19.99}/>
      
        <CardProduct  img={CardProduct1} title={"Adicolor Classics Joggers"} type={"Dress"} cost={19.99}/>
       
        <CardProduct  img={CardProduct1} title={"Adicolor Classics Joggers"} type={"Dress"} cost={19.99}/>
       
   
      </Slider>
    </CarouselWrapper>
  );
};
