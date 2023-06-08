import React from 'react'
import styled from "styled-components"
import { Header } from "../Header/Header"
import { Button } from '../Button'
import TopMainIcon from "../../assets/img/topmain-icon.svg"
import ImageProduct from "../../assets/img/image-product.svg"
const TopMainWrapper= styled.div`
    
    background-color:#F0F0F0;
    padding:20px 300px;
    height:850px;
   
    .content{
        display: flex;

    }
    .top-main-left{
        flex:60%;
        & h1{
            margin-top:200px;
            width: 360px;
            height: 55px;

            font-family: 'Roboto';
            font-style: normal;
            font-weight: 300;
            font-size: 74px;
            line-height: 55px;
            /* identical to box height, or 74% */

            text-transform: capitalize;
        }
        & p{
            width: 682px;
            height: 119px;
           
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 30px;
            line-height: 55px;
            margin:50px 0px;
            /* or 183% */

            text-transform: capitalize;

        }
        .top-main-icon{
            width: 25px;
            height: 25px;
            margin-right:10px;
           
        }
    }
    .top-main-right{
        flex:40%;
        position:relative;
        .top-main-img{
            position: absolute;
            top:125px;
        }
    }
    @media screen and (max-width: 1200px) {
       & {     
        padding:20px 100px;  
        max-width:1200px;  
        overflow-x:hidden;   
       }
       .top-main-right{
        flex:60%;
        position:relative;
        
        .top-main-img{
          scale:0.8;
            
        }
        }
       
        .top-main-left{
            flex:40% !important;
           
             
             & p{
              width:100%;
            margin-bottom:100px;
             }
        }
    }
    @media (min-width: 769px) and (max-width: 992px) {
       & {     
        padding:20px 60px;   
        max-width:992px;       
       }
       .top-main-right{
        flex:60%;
        position:relative;
        
        .top-main-img{
          scale:1.2;
          opacity:0.8;
          transform:translateX(-35%);
            
        }
        }
       
        .top-main-left{
            z-index:1000;
            transform:translateX(55%);
        }
    }
    @media (min-width: 577px) and (max-width: 768px)
    {
        max-width:768px;    
        .top-main-right{
           display:none;
        }
    }
    @media (max-width: 576px)
    {
        padding:20px ;
        max-width:768px;    
        .top-main-right{
           display:none;
        }
    }
    
`
export const TopMain = () => {
  return (
    <TopMainWrapper>
    <Header />
    <div className="content">
        <div className="top-main-left">
            <h1>Collections</h1>
            <p>you can explore ans shop
                 many differnt collection
                from various barands here.</p>
            <Button bordercolor={"#1E2832"} fontweight={400} height={72} width={232} backgroundcolor={"#1E2832"} fontsize={30} textcolor={"#fff"}>
                <img src={TopMainIcon} alt="top-main-icon" className='top-main-icon' />
                <span>Shop Now</span>
            </Button>
        </div>
        <div className="top-main-right">
           <img className='top-main-img' src={ImageProduct} alt="" />
        </div>
    </div>
    </TopMainWrapper>
  )
}
