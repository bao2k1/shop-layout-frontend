import React from "react";
import styled from "styled-components";
import Brand1 from "../../assets/img/brand-1.svg";
import Brand2 from "../../assets/img/brand-2.svg";
import Brand3 from "../../assets/img/brand-3.svg";
import Brand4 from "../../assets/img/brand-4.svg";
import Brand5 from "../../assets/img/brand-5.svg";
import BrandMain1 from "../../assets/img/brand-main1.svg";
import BrandMain2 from "../../assets/img/brand-main2.svg";
import { CardProduct } from "../CardProduct/CardProduct";
import CardProduct1 from "../../assets/img/card-product1.svg";
const HotBrandWrapper = styled.div`
  padding: 20px 300px;
  background-color: #fff;
  padding-top: 90px;
  .brand {
    padding-bottom: 90px;
    display: flex;
    justify-content: space-between;
  }
  .brand-main {
    display: flex;
    padding-bottom: 120px;
 
  }
  .hot-brand-left {
    flex: 50%;
    height: 650px;
    display: flex;
    flex-direction: column;
    position: relative;
    img {
    }
    .vertical-text {
      position: absolute;
      z-index: 10;
      /* transform: rotate(-90deg); */
      width: 648px;
      height: 52px;
      left: -350px;
      top: 270px;
      /* left: -52px;
            top: 648px; */
      p {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        text-align: center;
        text-transform: uppercase;
        transform: rotate(-90deg);
      }
    }
  }
  .hot-brand-right {
    /* margin-left:2%; */
    transform: translateX(25px);
    flex: 50%;
    height: 650px;
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    .item {
      flex-basis: calc(50%-25px); /* Kích thước cơ bản của mỗi cột là 50% */
      height: auto; /*
            box-sizing: border-box; /* Đảm bảo padding và border không làm thay đổi kích thước của phần tử */
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  @media screen and (max-width: 1200px) {
       & {     
        padding:20px 100px;      
       }
       .vertical-text{
        scale:0.8;
        left: -350px;
      
      top: 20px;
       }
    }
    @media (min-width: 993px) and (max-width: 1200px){
      .brand{
        scale:0.8;
        margin-left:-90px;
      }
    }
    @media (min-width: 769px) and (max-width: 992px){
      .brand{
        margin-top:20px;
        scale:1;
       flex-wrap: wrap;
       justify-content: center;
       
      }
    }
    @media (min-width: 577px) and (max-width: 768px){
      padding: 20px 0px;
      .brand{
        display: none;
      }
    }
    @media (max-width: 576px)
    {
      padding: 20px 0px;
      .brand{
        display: none;
      }
    }
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Chia grid thành 2 cột bằng nhau */
  gap: 25px; /* Khoảng cách giữa các cột và dòng */
  @media (min-width: 577px) and (max-width: 768px){
      grid-template-columns:1fr;
    }
    @media (max-width: 576px){
      grid-template-columns:1fr;
    }
  /* Các thuộc tính CSS khác cho grid container */
`;

const Column1 = styled.div`
position: relative;
/* background-color:red; */
.vertical-text {
      position: absolute;
      z-index: 10;
      /* transform: rotate(-90deg); */
      width: 648px;
      height: 52px;
      left: -350px;
      top: 270px;
      /* left: -52px;
            top: 648px; */
      p {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        text-align: center;
        text-transform: uppercase;
        transform: rotate(-90deg);
      }
      
    }
  /* CSS cho cột 1 */

  /* Các thuộc tính CSS khác cho cột 1 */
  @media screen and (max-width: 1200px) {
    overflow-x:hidden;   
       .vertical-text{
        scale:0.8;
        left: -350px;
      
      top: 195px;
       }
    }
    @media (min-width: 993px) and (max-width: 1200px){
      .vertical-text{
        scale:0.6 ;
        left: -350px;
      
      top: 150px;
       }
     
    }
    @media (min-width: 769px) and (max-width: 992px){
      .vertical-text{
        scale:0.5 ;
        left: -350px;
      
      top: 100px;
       }
    }
    @media (min-width: 577px) and (max-width: 768px){
      .vertical-text{
        display:none;
       }
    }
    @media (max-width: 576px)
    {
      .vertical-text{
        display:none;
       }
    }
    
`;

const Column2 = styled.div`
/* background-color:blue; */
  display: grid;
  grid-template-columns: 1fr 1fr; /* Chia cột 2 thành 2 cột bằng nhau */
  gap: 25px; /* Khoảng cách giữa các cột và dòng trong cột 2 */
  grid-row-gap: 25px;
  /* Các thuộc tính CSS khác cho cột 2 */
  @media (min-width: 577px) and (max-width: 768px){
      grid-template-columns:1fr;
    }
    @media (max-width: 576px){
      grid-template-columns:1fr;
    }
`;

const Column2Item = styled.div`
 display: grid;
  /* CSS cho các item trong cột 2 */
  grid-row-gap: 22px;
  /* Các thuộc tính CSS khác cho các item trong cột 2 */
`;

export const HotBrand = () => {
  return (
    <HotBrandWrapper>
      <div className="brand">
        <img src={Brand1} alt="" />
        <img src={Brand2} alt="" />
        <img src={Brand3} alt="" />
        <img src={Brand4} alt="" />
        <img src={Brand5} alt="" />
      </div>
      {/* <div className="brand-main">
        <div className="hot-brand-left ">
          <div className="vertical-text">
            <p>Explore new and popular styles</p>
          </div>
          <CardProduct section={"brand"} img={BrandMain1} />
        </div>
        <div className="hot-brand-right">
          <div class="item">
            <CardProduct section={"brand"} img={BrandMain2} />
          </div>
          <div class="item">
            <CardProduct section={"brand"} img={BrandMain2} />
          </div>
          <div class="item">
            <CardProduct section={"brand"} img={BrandMain2} />
          </div>
          <div class="item">
            <CardProduct section={"brand"} img={BrandMain2} />
          </div>
        </div>
      </div> */}
      <GridContainer>
        <Column1>
            <div className="vertical-text">
                <p>Explore new and popular styles</p>
            </div>
            <CardProduct section={"brand"} img={BrandMain1} />
        </Column1>
        <Column2>
          <Column2Item>
            <div class="item">
                <CardProduct tag={"Hot"} section={"brand"} img={BrandMain2} />
            </div>
            <div class="item">
                <CardProduct tag={"Sale"} section={"brand"} img={BrandMain2} />
            </div>
          </Column2Item>
          <Column2Item>
            <div class="item">
                    <CardProduct section={"brand"} img={BrandMain2} />
                </div>
                <div class="item">
                    <CardProduct section={"brand"} img={BrandMain2} />
                </div>
          </Column2Item>
          
        </Column2>
      </GridContainer>
    </HotBrandWrapper>
  );
};
