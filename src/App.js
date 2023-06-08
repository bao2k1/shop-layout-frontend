
import './App.css';
import React from 'react';
import { Button } from './components/Button';
import { HotBrand } from './components/HotBrand';
import { TopMain } from './components/TopMain/TopMain';
import styled from "styled-components"
import FilterIcon from "../src/assets/img/filter-icon.svg"
import { CardProduct } from './components/CardProduct/CardProduct';
import BannerBg from "../src/assets/img/banner-bg.svg"
import ZaraBg from "../src/assets/img/zara-bg.svg"
import LogoBanner from "../src/assets/img/logo-banner.svg"
import Gallery1 from "../src/assets/img/gallery1.svg"
import { Footer } from './components/Footer';
import CardProduct1 from "../src/assets/img/card-product1.svg"
import Facebook from "../src/assets/img/facebook.svg"
import { Carousel } from './components/Carousel/Carousel';

const Wrapper =styled.div`
 li:hover{
  color:red !important;
  cursor:pointer;
 }

`
const ProductsWrapper =styled.div`
  padding:20px 300px;
  background-color:#fff;

  h1{
    height: 60px;
    margin:auto;
    /* H2 */

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 50px;
    line-height: 60px;
    /* identical to box height */

    text-align: center;
    text-transform: capitalize;
      }
      .filter{
        height: 100px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        .filter-list{
          padding:0;
          display:flex;
          list-style: none;
          & li{
            padding-right:40px;
            font-family: 'Open Sans';
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 22px;
          /* identical to box height */

          text-transform: capitalize;
                    }
        }
        .filter-icon{
          width: 25px;
          height: 25px;
        }
      }
      .products-list{
        display:flex;
        flex-wrap:wrap;
        gap:2%;
        .item {
            flex-basis: 23.5%; /* Kích thước cơ bản của mỗi cột là 50% */
            height: auto; 
            /* border: 1px solid; */
            box-sizing: border-box; /* Đảm bảo padding và border không làm thay đổi kích thước của phần tử */
           
            }
      }
      @media screen and (max-width: 1200px) {
       & {     
        padding:20px 100px;   
      
       }
      
    }
    @media (min-width: 769px) and (max-width: 992px){
      h1{
        padding-bottom:30px;
        scale:0.8;
      }
      .products-list{
        display:flex;
        flex-wrap:wrap;
        gap:4%;
        .item {
            flex-basis: 48%; /* Kích thước cơ bản của mỗi cột là 50% */
            height: auto; 
            /* border: 1px solid; */
            box-sizing: border-box; /* Đảm bảo padding và border không làm thay đổi kích thước của phần tử */
           
            }
      }
    }
    @media (min-width: 577px) and (max-width: 768px){
      & {     
        padding:20px 20px;      
       }
      h1{
        text-align:center;
        padding-bottom:30px;
        scale:0.8;
      }
      .products-list{
        display:flex;
        flex-wrap:wrap;
        gap:4%;
        .item {
            flex-basis: 48%; /* Kích thước cơ bản của mỗi cột là 50% */
            height: auto; 
            /* border: 1px solid; */
            box-sizing: border-box; /* Đảm bảo padding và border không làm thay đổi kích thước của phần tử */
           
            }
      }
    }
    @media (max-width: 576px){
      & {     
        padding:20px 20px;      
       }
      h1{
        text-align:center;
        padding-bottom:30px;
        scale:0.5;
      }
      .products-list{
        display:flex;
        flex-wrap:wrap;
        .item {
            flex-basis: 100%; /* Kích thước cơ bản của mỗi cột là 50% */
            height: auto; 
            /* border: 1px solid; */
            box-sizing: border-box; /* Đảm bảo padding và border không làm thay đổi kích thước của phần tử */
           
            }
      }
      .filter-list{
        display:none !important;
      }
    }
  `
  const BannerWrapper =styled.div`
  overflow-x:hidden; 
  position: relative;
  margin-top:90px;
    height:750px;
    background-image:  url(${props => props.image});
    background-size: cover; /* Hiển thị ảnh bằng cách che đầy nền */
    background-position: center; /* Căn giữa ảnh theo chiều ngang và dọc */
    .opacity-logo{
      position:absolute;
      top:50px;
      right:-5px;
    }

    .content-banner{
      position:absolute;
      left:57%;
      top:30%;
      p{
        margin:50px 0;
        color:#FF6F61;
        width:58%;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 40px;
        /* or 154% */

        text-transform: capitalize;
      }
    }
    @media screen and (max-width: 1200px) {
      overflow-x:hidden;   
      .content-banner{
        top:15%;
      }
    }
    @media (min-width: 769px) and (max-width: 992px){
      .content-banner{
        top:40%;
        .logo-content{
          margin-bottom:40px;
        }
        p {
          display:none;
        }
      }
    }
    @media (min-width: 577px) and (max-width: 768px){
      
      .content-banner{
        top:40%;
        .logo-content{
          margin-bottom:40px;
        }
        p {
          display:none;
        }
      }
    }
    @media (max-width: 576px){
      background-size: cover;
      
      background-repeat: no-repeat;
      .content-banner{
        top:40%;
        left:20%;
        .logo-content{
          margin-bottom:40px;
        }
        p {
          display:none;
        }
      }
    }
    `
    const BestSellWrapper =styled.div`
    padding:20px 300px 100px 300px;
    background-color:#fff;
    margin-top:120px;
    
    
  h1{
    height: 60px;
    margin:auto;
    /* H2 */

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 50px;
    line-height: 60px;
    /* identical to box height */

    text-align: center;
    text-transform: capitalize;
      }
      .filter{
        height: 100px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        .filter-list{
          padding:0;
          display:flex;
          list-style: none;
          & li{
            padding-right:40px;
            font-family: 'Open Sans';
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 22px;
          /* identical to box height */

          text-transform: capitalize;
                    }
        }
        .filter-icon{
          width: 25px;
          height: 25px;
        }
      }
      .products-list{
        display:flex;
        flex-wrap:wrap;
        gap:2%;
        .item {
            flex-basis: 23.5%; /* Kích thước cơ bản của mỗi cột là 50% */
            height: auto; 
            /* border: 1px solid; */
            box-sizing: border-box; /* Đảm bảo padding và border không làm thay đổi kích thước của phần tử */
           
            }
      }
      @media screen and (max-width: 1200px) {
      & {
        padding:20px 100px 100px 100px ;
        overflow-x:hidden;   
      }
    }
    @media (min-width: 577px) and (max-width: 768px){
      padding:20px 50px 100px 50px;
      .filter-list li{
        font-size:16px !important;
      }
    }
    @media (max-width: 576px){
      padding:10px;
      h1{
        font-size:26px !important;
      }
      .filter-list {
        display:none !important;
      }
    }
    `
    const GallerryWrapper = styled.div`
      background-color:#f0f0f0;
      padding: 20px 300px;
      
      h1{
        text-align:center;
        margin-bottom:60px;
        margin-top:100px;
        font-size:50px;
      }
      p{
        text-align:center;
        color:#FF6F61;
        font-weight: 500;
        font-size: 28px;
        line-height: 33px;
        margin-top:70px;
        margin-bottom:100px;
      }
      .gallery{
        display:flex;
        flex-wrap:wrap;
        width: 100%;
        gap:2%;
        &-item{
          position:relative;
          flex-basis:15%;
          background-color:#1E2832;
          &:hover{
            img {
              opacity:0.6;
              
            }
            .hover-img{display:flex;
          opacity:1;}
          }
          & img{

            width: 100%;
            height: 100%;
            object-fit:cover;
          }
        }
        .hover-img{
          width: 80px;
          height: 80px;
          position:absolute;
          left: 50%;
          top:50%;
          transform:translate(-50%, -50%);
          display:none;
        }
      }
      @media screen and (max-width: 1200px) {
        
      & {
        padding:20px 100px  ;
        overflow-x:hidden;   
      }
    }
    @media (max-width: 576px){
      padding:20px;
      margin:0;
      h1{
        font-size:26px;
      }
      .gallery-item{
        flex-basis:49%;
      }
    }
    `
function App() {
  
  return (
    <Wrapper>
    <TopMain></TopMain>
    <HotBrand></HotBrand>
    <ProductsWrapper className='products'>
      <h1>Or subscribe to the newsletter</h1>
      <div className='filter'>
        <ul className='filter-list'>
          <li>All Products</li>
          <li>T-Shirt</li>
          <li>Hoodies</li>
          <li>Jacket</li>
        </ul>
        <Button fontsize={16} textcolor={"#fff"} width={100} height={32} backgroundcolor={"#000"}>
          <img className='filter-icon' src={FilterIcon} alt='icon'/>
          <span>Filter</span>
        </Button >
      </div>
      <div className='products-list'>
        <div class="item">
            <CardProduct tag={"Hot"} section={"product"} img={CardProduct1} title={"Adicolor Classics Joggers"} type={"Dress"} cost={19.99}/>
        </div>
        <div class="item">
        <CardProduct tag={"Hot"} section={"product"} img={CardProduct1} title={"Adicolor Classics Joggers"} type={"Dress"} cost={19.99}/>
        </div>
        <div class="item">
        <CardProduct tag={"Sale"} section={"product"} img={CardProduct1} title={"Adicolor Classics Joggers"} type={"Dress"} cost={19.99}/>
        </div>
        <div class="item">
        <CardProduct section={"product"} img={CardProduct1} title={"Adicolor Classics Joggers"} type={"Dress"} cost={19.99}/>
        </div>
        <div class="item">
        <CardProduct section={"product"} img={CardProduct1} title={"Adicolor Classics Joggers"} type={"Dress"} cost={19.99}/>
        </div>
        <div class="item">
        <CardProduct section={"product"} img={CardProduct1} title={"Adicolor Classics Joggers"} type={"Dress"} cost={19.99}/>
        </div>
        <div class="item">
        <CardProduct section={"product"} img={CardProduct1} title={"Adicolor Classics Joggers"} type={"Dress"} cost={19.99}/>
        </div>
        <div class="item">
        <CardProduct section={"product"} img={CardProduct1} title={"Adicolor Classics Joggers"} type={"Dress"} cost={19.99}/>
        </div>
      </div>
      <div className='banner'>

      </div>
    </ProductsWrapper>
    <BannerWrapper image={BannerBg}>
      <img className='opacity-logo' src={ZaraBg} alt=''/>
      <div className='content-banner'>
          <img className='logo-content' src={LogoBanner} alt=''/>
          <p>Lustrous yet understated. The new evening
            wear collection exclusively offered at the
            reopened Giorgio Armani boutique in Los
            Angeles.</p>
      <Button bordercolor={"#fff"} textcolor={"#000"} height={72} width={237} fontsize={30} backgroundcolor={"#fff"} >See Collection</Button>
      </div>
    </BannerWrapper>
    <BestSellWrapper>
    <h1>Best Sellers</h1>
      <div className='filter'>
        <ul className='filter-list'>
          <li>All Products</li>
          <li>T-Shirt</li>
          <li>Hoodies</li>
          <li>Jacket</li>
        </ul>
        <Button fontsize={16} textcolor={"#fff"} width={100} height={36} backgroundcolor={"#000"}>
          <span>Show All</span>
        </Button >
      </div>
      <Carousel show={4} />

    </BestSellWrapper>
    <GallerryWrapper>
        <h1>Follow products and discounts on Instagram</h1>
        <div className='gallery'>
          <div className='gallery-item'>
            <img src={Gallery1} alt=''/>
            <img src={Facebook} className='hover-img' alt=''/>
          </div>
          <div className='gallery-item'>
          <img src={Gallery1} alt=''/>
          <img src={Facebook} className='hover-img' alt=''/>

          </div>
          <div className='gallery-item'>
          <img src={Gallery1} alt=''/>
          <img src={Facebook} className='hover-img' alt=''/>

          </div>
          <div className='gallery-item'>
          <img src={Gallery1} alt=''/>
          <img src={Facebook} className='hover-img' alt=''/>

          </div>
          <div className='gallery-item'>
          <img src={Gallery1} alt=''/>
          <img src={Facebook} className='hover-img' alt=''/>

          </div>
          <div className='gallery-item'>
          <img src={Gallery1} alt=''/>
          <img src={Facebook} className='hover-img' alt=''/>

          </div>
        </div>
        <p>@Lisa.Offical</p>
    </GallerryWrapper>
    <Footer></Footer>
    </Wrapper>
    
  );
}

export default App;
